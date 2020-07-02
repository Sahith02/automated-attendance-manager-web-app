
var firebaseConfig = {
		//<firebase-configuration-goes-here>
	  };
	  // Initialize Firebase
	  firebase.initializeApp(firebaseConfig);


var allData = {};

async function getData(){
	var ref = await firebase.database().ref("users");
	await ref.once("value", function(snapshot) {
	  // console.log(snapshot.val());
	  saveData(snapshot.val());
	});
}

function saveData(data){
	allData = data;
	// console.log(allData);
	changeText();
}

function changeText(){
	allKeys = Object.keys(allData);
	for(var i = 0; i < allKeys.length; i++){
		var button = document.createElement('button');
		button.innerHTML = "<img src = '" + allData[allKeys[i]]['profilePic'] + "'" + "style = 'width: 50px; heigth: 50px; border-radius: 50%' />" + allKeys[i];
		button.className = "collapsible";
		button.addEventListener("click", function() {
			this.classList.toggle("active");
			var content = this.nextElementSibling;
			if(content.style.maxHeight){
		      content.style.maxHeight = null;
		    }
		    else{
		      content.style.maxHeight = content.scrollHeight + "px";
		    }
		});
		document.body.appendChild(button);


		var studentDiv = document.createElement('div');
		studentDiv.className = "content";
		var divTemp = document.createElement('div');

		var pTemp = document.createElement('p');
		var currStudentData = allData[allKeys[i]];
		// pTemp.innerHTML = JSON.stringify(currStudentData);

		var toShow1 = ['SRN', 'name']
		for(var j = 0; j < toShow1.length; j++){
			var pTempNew = document.createElement('P');
			pTempNew.innerHTML = toShow1[j] + ": " + JSON.stringify(currStudentData[toShow1[j]]);
			pTemp.appendChild(pTempNew);
		}
		var pTempNew = document.createElement('P');
		pTempNew.innerHTML = "Subjects" + ": " + Object.values(currStudentData["subjects"]).toString();
		pTemp.appendChild(pTempNew);

		var attDiv = document.createElement('div');
		var attP = document.createElement('p');
		attP.innerHTML = 'Attendance: ';
		attDiv.appendChild(attP);

		// console.log(Object.keys(currStudentData['attendance']));

		for(var j = 0; j < Object.keys(currStudentData['attendance']).length; j++){
			var attButton = document.createElement('button');
			attButton.id = "myBtn" + i + j;
			attButton.className = "openmodal";
			attButton.innerHTML = Object.keys(currStudentData['attendance'])[j];

			myModalDiv = document.createElement('div');
			myModalDiv.className = "modal";
			myModalDiv.id = "myModal" + i + j;
			myModalDiv.style.display = "none";

			modalContentDiv = document.createElement('div');
			modalContentDiv.className = "modal-content";

			spanClose = document.createElement('span');
			spanClose.className = "close";
			spanClose.innerHTML = "&times;";
			spanClose.style = "color: white;";
			
			pModalDiv = document.createElement('p');
			pModalDiv.innerHTML = "Attendance: ";
			pModalDiv.style = "font-size: 30px; padding-left: 15px;";

			var modalHeader = document.createElement('div');
			modalHeader.className = "modal-header";

			modalHeader.appendChild(spanClose);
			modalHeader.appendChild(pModalDiv);
			modalContentDiv.appendChild(modalHeader);


			var currStudentCurrSubject = currStudentData['attendance'][Object.keys(currStudentData['attendance'])[j]];	
			var currStudentCurrSubjectEntries = Object.entries(currStudentCurrSubject);		
			for(var k = 0; k < currStudentCurrSubjectEntries.length; k++){
				var dateAtt = currStudentCurrSubjectEntries[k];
				var pDateAtt = document.createElement('p');
				pDateAtt.innerHTML = dateAtt[0] + ": " + dateAtt[1].replace(/0/g, '\u274c').replace(/1/g, '\u2705');
				pDateAtt.style = "padding: 10px;";
				modalContentDiv.appendChild(pDateAtt);
			}


			// pModal1 = document.createElement('p');
			// pModal1.innerHTML = "new line";
			// modalContentDiv.appendChild(pModal1);


			myModalDiv.appendChild(modalContentDiv);

			attDiv.appendChild(attButton);
			attDiv.appendChild(myModalDiv);
		}


		pTemp.appendChild(attDiv);


		divTemp.appendChild(pTemp);
		studentDiv.appendChild(divTemp);
		document.body.appendChild(studentDiv);
	}

	var modals = document.getElementsByClassName('modal');
	// Get the button that opens the modal
	var btns = document.getElementsByClassName("openmodal");
	var spans=document.getElementsByClassName("close");
	for(let i=0;i<btns.length;i++){
	   btns[i].onclick = function() {
	      modals[i].style.display = "block";
	   }
	}
	for(let i=0;i<spans.length;i++){
	    spans[i].onclick = function() {
	       modals[i].style.display = "none";
	    }
	 }
}

getData();