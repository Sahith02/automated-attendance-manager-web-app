const srn = document.getElementById('sSRN');
const name = document.getElementById('sname');
const password = document.getElementById('psw');
const profile = document.getElementById('ppl');

const att2511= document.getElementById('251-1');
const att2512= document.getElementById('251-2');
const att2514= document.getElementById('251-4');
const att2515= document.getElementById('251-5');

const att2521= document.getElementById('252-1');
const att2522= document.getElementById('252-2');
const att2524= document.getElementById('252-4');
const att2525= document.getElementById('252-5');

const att2531= document.getElementById('253-1');
const att2532= document.getElementById('253-2');
const att2534= document.getElementById('253-4');
const att2535= document.getElementById('253-5');

const att2541= document.getElementById('254-1');
const att2542= document.getElementById('254-2');
const att2544= document.getElementById('254-4');
const att2545= document.getElementById('254-5');

const att2551= document.getElementById('255-1');
const att2552= document.getElementById('255-2');
const att2554= document.getElementById('255-4');
const att2555= document.getElementById('255-5');

const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');

const db = firebase.database();
const usersRef = db.ref('/users');
const attendance = db.ref('/attendance');
addBtn.addEventListener('click', e => {
  e.preventDefault();
  usersRef.child(srn.value).set({
    SRN : srn.value,
    attendance : 'attendance',
    Name: name.value,
    password: password.value,
    profilePic : profile.value,
    });

    attendance.child('attendance').set({
        UE18CS251 : 'UE18CS251'
    })
});






    // fetch('<firebase-url-goes-here>', { mode: 'no-cors'})
    // .then(response => {
    // return response.json()
    // })
    //  .then(data => {
    // // Work with JSON data here
    // console.log(data)
    //  })
    // .catch(err => {
    // console.log(err)
    // })

    
        att251_1 : att2511.value,
        att251_2 : att2512.value,
        att251_4 : att2514.value,
        att251_5 : att2515.value,
   
        att252_1 : att2521.value,
        att252_2 : att2522.value,
        att252_4 : att2524.value,
        att252_5 : att2525.value,
     
        att253_1 : att2531.value,
        att253_2 : att2532.value,
        att253_4 : att2534.value,
        att253_5 : att2535.value,
    
        att254_1 : att2541.value,
        att254_2 : att2542.value,
        att254_4 : att2544.value,
        att254_5 : att2545.value,
     
        att255_1 : att2551.value,
        att255_2 : att2552.value,
        att255_4 : att2554.value,
        att255_5 : att2555.value,
    