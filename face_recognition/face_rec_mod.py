import face_recognition as fr
import os
import cv2
import face_recognition
import numpy as np
from time import sleep
from firebase import firebase
import random

final_names = []
initial_names = []

print('starting recognition program...')

def get_encoded_faces():
    """
    looks through the faces folder and encodes all
    the faces

    :return: dict of (name, image encoded)
    """
    encoded = {}

    for dirpath, dnames, fnames in os.walk("./faces"):
        for f in fnames:
            if f.endswith(".jpg") or f.endswith(".png"):
                face = fr.load_image_file("faces/" + f)
                encoding = fr.face_encodings(face)[0]
                encoded[f.split(".")[0]] = encoding

    return encoded


def unknown_image_encoded(img):
    """
    encode a face given the file name
    """
    face = fr.load_image_file("faces/" + img)
    encoding = fr.face_encodings(face)[0]

    return encoding


def classify_face(im):
    """
    will find all of the faces in a given image and label
    them if it knows what they are

    :param im: str of file path
    :return: list of face names
    """
    faces = get_encoded_faces()
    faces_encoded = list(faces.values())
    known_face_names = list(faces.keys())
    initial_names.extend(known_face_names)

    #img = cv2.imread(im, 1)
    img = im
    #img = cv2.resize(img, (0, 0), fx=0.5, fy=0.5)
    #img = img[:,:,::-1]
 
    face_locations = face_recognition.face_locations(img)
    unknown_face_encodings = face_recognition.face_encodings(img, face_locations)

    face_names = []
    for face_encoding in unknown_face_encodings:
        # See if the face is a match for the known face(s)
        matches = face_recognition.compare_faces(faces_encoded, face_encoding)
        name = "Unknown"

        # use the known face with the smallest distance to the new face
        face_distances = face_recognition.face_distance(faces_encoded, face_encoding)
        best_match_index = np.argmin(face_distances)
        if matches[best_match_index]:
            name = known_face_names[best_match_index]

        face_names.append(name)
            
        for srn in face_names:
            if(srn not in final_names):
                final_names.append(srn)
        
        for (top, right, bottom, left), name in zip(face_locations, face_names):
            # Draw a box around the face
            cv2.rectangle(img, (left-20, top-20), (right+20, bottom+20), (255, 0, 0), 2)

            # Draw a label with a name below the face
            cv2.rectangle(img, (left-20, bottom -15), (right+20, bottom+20), (255, 0, 0), cv2.FILLED)
            font = cv2.FONT_HERSHEY_SIMPLEX
            cv2.putText(img, name, (left -20, bottom), font, 0.5, (255, 255, 255), 2)
            cv2.putText(img, "present", (left -20, bottom + 15), font, 0.5, (255, 255, 255), 2)
        cv2.imwrite("result.jpg", img)

               
"""   
    # Display the resulting image
    while True:

        cv2.imshow('Video', img)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            return face_names 
    

"""
def mainfunc():
    arr=os.listdir(r'.\video_to_process') #change dir to urs
    arr2=list(filter(lambda x:x.endswith(".mp4"),arr))

    #print(arr2[0])

    cap = cv2.VideoCapture(r'.\video_to_process\\' + arr2[0])
    countlist=[]
    count = 0

    mylist.insert(END, "video fetched successfully!")
    mylist.insert(END, "processing video...")
    print('video fetched successfully!')
    print('processing video...')

    while cap.isOpened():
        ret, frame = cap.read()

        if ret:
            #cv2.imwrite('frame{:d}.jpg'.format(count), frame)
            count += 25
            if(count in [100]):
                cv2.imwrite("before-process.jpg", frame)
                classify_face(frame)
            countlist.append(count)
            cap.set(1, count)
        else:
            cap.release()
            break

    mylist.insert(END, "video processed successfully!")
    print('video processed successfully!')

    #print(final_names)


    for srn in initial_names:
        if(srn in final_names):
            result = firebase.put('users/' + str(srn) + '/attendance/' + arr2[0].split("_")[0]+'/', str(arr2[0].split("_")[1].split(".")[0]), '1')
        else:
            result = firebase.put('users/' + str(srn) + '/attendance/' + arr2[0].split("_")[0]+'/', str(arr2[0].split("_")[1].split(".")[0]), '0')
        print(srn + " updated in database successfully")
        mylist.insert(END, srn + " updated in database successfully")
    mylist.pack(side = TOP, fill = BOTH)
    scrollbar.config(command = mylist.yview)


firebase = firebase.FirebaseApplication("<firebase-url-goes-here>",None)
from tkinter import *
top = Tk()
top.title("Face Recognition")
positionRight = int(top.winfo_screenwidth()/2 - 300/2)
positionDown = int(top.winfo_screenheight()/2 - 300/2)
top.geometry("400x300+{}+{}".format(positionRight, positionDown))


scrollbar = Scrollbar(top)
scrollbar.pack( side = RIGHT, fill = Y )

mylist = Listbox(top, yscrollcommand = scrollbar.set )

mylist.insert(END, "Starting Program...")

mylist.pack( side = TOP, fill = BOTH )
scrollbar.config( command = mylist.yview )


B = Button(top, text ="Process Video in Folder", command = mainfunc)

B.pack()
top.mainloop()
print('PROGRAM FINISHED')
