const srn = document.getElementById('sSRN');
const newat = document.getElementById('newatt');

function changesub(){
    subject = document.getElementById("subject");
    subselected = subject.options[subject.selectedIndex].value;
    // console.log(subselected);
}


function changedate(){
    date = document.getElementById("date");
    dateselected = date.options[date.selectedIndex].value;
}

const updateBtn = document.getElementById('updateBtn');

var db = firebase.database();

updateBtn.addEventListener('click', updateatt);

function updateatt(){
    changesub();
    changedate();
    var subselected1 = subselected.toString();
    var dateselected1 = dateselected.toString();
    var srn1 = srn.value.toString();
    var path = "users/";
    var path1 = "attendance/";
    var path2 = path.concat(srn1,"/",path1,subselected1);
    var usersRef = firebase.database().ref(path2).update({ [dateselected1] : newat.value});

}

