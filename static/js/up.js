const srn = document.getElementById('sSRN');
const newat = document.getElementById('newatt');

// const sub251 = document.getElementById('UE18CS251');
// const sub252 = document.getElementById('UE18CS252');
// const sub253 = document.getElementById('UE18CS253');
// const sub254 = document.getElementById('UE18CS254');
// const sub255 = document.getElementById('UE18CS255');

// const date1 = document.getElementById('1-1-2020');
// const date2 = document.getElementById('2-1-2020');
// const date4 = document.getElementById('4-1-2020');
// const date5 = document.getElementById('5-1-2020');

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

function updateatt()
{   
    changesub();
    changedate();
    if(srn.value=='PES1201801651')
    {
        if(subselected=='UE18CS251' && dateselected=='1-1-20')
        {
            db.ref("users/PES1201801651/attendance/UE18CS251").update({ '1-1-20' : newat.value });
        }
        else if(subselected=='UE18CS251' && dateselected=='2-1-20')
        {
            db.ref("users/PES1201801651/attendance/UE18CS251").update({ '2-1-20' : newat.value });
        }
        else if(subselected=='UE18CS251' && dateselected=='4-1-20')
        {
            db.ref("users/PES1201801651/attendance/UE18CS251").update({ '4-1-20' : newat.value });
        }
        else if(subselected=='UE18CS251' && dateselected=='5-1-20')
        {
            db.ref("users/PES1201801651/attendance/UE18CS251").update({ '5-1-20' : newat.value });
        }
        else if(subselected=='UE18CS252' && dateselected=='1-1-20')
        {
            db.ref("users/PES1201801651/attendance/UE18CS252").update({ '1-1-20' : newat.value });
        }
        else if(subselected=='UE18CS252' && dateselected=='2-1-20')
        {
            db.ref("users/PES1201801651/attendance/UE18CS252").update({ '2-1-20' : newat.value });
        }
        else if(subselected=='UE18CS252' && dateselected=='4-1-20')
        {
            db.ref("users/PES1201801651/attendance/UE18CS252").update({ '4-1-20' : newat.value });
        }
        else if(subselected=='UE18CS252' && dateselected=='5-1-20')
        {
            db.ref("users/PES1201801651/attendance/UE18CS252").update({ '5-1-20' : newat.value });
        }
        else if(subselected=='UE18CS253' && dateselected=='1-1-20')
        {
            db.ref("users/PES1201801651/attendance/UE18CS253").update({ '1-1-20' : newat.value });
        }
        else if(subselected=='UE18CS253' && dateselected=='2-1-20')
        {
            db.ref("users/PES1201801651/attendance/UE18CS253").update({ '2-1-20' : newat.value });
        }
        else if(subselected=='UE18CS253' && dateselected=='4-1-20')
        {
            db.ref("users/PES1201801651/attendance/UE18CS253").update({ '4-1-20' : newat.value });
        }
        else if(subselected=='UE18CS253' && dateselected=='5-1-20')
        {
            db.ref("users/PES1201801651/attendance/UE18CS253").update({ '5-1-20' : newat.value });
        }
        else if(subselected=='UE18CS254' && dateselected=='1-1-20')
        {
            db.ref("users/PES1201801651/attendance/UE18CS254").update({ '1-1-20' : newat.value });
        }
        else if(subselected=='UE18CS254' && dateselected=='2-1-20')
        {
            db.ref("users/PES1201801651/attendance/UE18CS254").update({ '2-1-20' : newat.value });
        }
        else if(subselected=='UE18CS254' && dateselected=='4-1-20')
        {
            db.ref("users/PES1201801651/attendance/UE18CS254").update({ '4-1-20' : newat.value });
        }
        else if(subselected=='UE18CS254' && dateselected=='5-1-20')
        {
            db.ref("users/PES1201801651/attendance/UE18CS254").update({ '5-1-20' : newat.value });
        }
        else if(subselected=='UE18CS255' && dateselected=='1-1-20')
        {
            db.ref("users/PES1201801651/attendance/UE18CS255").update({ '1-1-20' : newat.value });
        }
        else if(subselected=='UE18CS255' && dateselected=='2-1-20')
        {
            db.ref("users/PES1201801651/attendance/UE18CS255").update({ '2-1-20' : newat.value });
        }
        else if(subselected=='UE18CS255' && dateselected=='4-1-20')
        {
            db.ref("users/PES1201801651/attendance/UE18CS255").update({ '4-1-20' : newat.value });
        }
        else if(subselected=='UE18CS255' && dateselected=='5-1-20')
        {
            db.ref("users/PES1201801651/attendance/UE18CS255").update({ '5-1-20' : newat.value });
        }
        

    }
    else if(srn.value=='PES1201800032')
    {
        if(subselected=='UE18CS251' && dateselected=='1-1-20')
        {
            db.ref("users/PES1201800032/attendance/UE18CS251").update({ '1-1-20' : newat.value });
        }
        else if(subselected=='UE18CS251' && dateselected=='2-1-20')
        {
            db.ref("users/PES1201800032/attendance/UE18CS251").update({ '2-1-20' : newat.value });
        }
        else if(subselected=='UE18CS251' && dateselected=='4-1-20')
        {
            db.ref("users/PES1201800032/attendance/UE18CS251").update({ '4-1-20' : newat.value });
        }
        else if(subselected=='UE18CS251' && dateselected=='5-1-20')
        {
            db.ref("users/PES1201800032/attendance/UE18CS251").update({ '5-1-20' : newat.value });
        }
        else if(subselected=='UE18CS252' && dateselected=='1-1-20')
        {
            db.ref("users/PES1201800032/attendance/UE18CS252").update({ '1-1-20' : newat.value });
        }
        else if(subselected=='UE18CS252' && dateselected=='2-1-20')
        {
            db.ref("users/PES1201800032/attendance/UE18CS252").update({ '2-1-20' : newat.value });
        }
        else if(subselected=='UE18CS252' && dateselected=='4-1-20')
        {
            db.ref("users/PES1201800032/attendance/UE18CS252").update({ '4-1-20' : newat.value });
        }
        else if(subselected=='UE18CS252' && dateselected=='5-1-20')
        {
            db.ref("users/PES1201800032/attendance/UE18CS252").update({ '5-1-20' : newat.value });
        }
        else if(subselected=='UE18CS253' && dateselected=='1-1-20')
        {
            db.ref("users/PES1201800032/attendance/UE18CS253").update({ '1-1-20' : newat.value });
        }
        else if(subselected=='UE18CS253' && dateselected=='2-1-20')
        {
            db.ref("users/PES1201800032/attendance/UE18CS253").update({ '2-1-20' : newat.value });
        }
        else if(subselected=='UE18CS253' && dateselected=='4-1-20')
        {
            db.ref("users/PES1201800032/attendance/UE18CS253").update({ '4-1-20' : newat.value });
        }
        else if(subselected=='UE18CS253' && dateselected=='5-1-20')
        {
            db.ref("users/PES1201800032/attendance/UE18CS253").update({ '5-1-20' : newat.value });
        }
        else if(subselected=='UE18CS254' && dateselected=='1-1-20')
        {
            db.ref("users/PES1201800032/attendance/UE18CS254").update({ '1-1-20' : newat.value });
        }
        else if(subselected=='UE18CS254' && dateselected=='2-1-20')
        {
            db.ref("users/PES1201800032/attendance/UE18CS254").update({ '2-1-20' : newat.value });
        }
        else if(subselected=='UE18CS254' && dateselected=='4-1-20')
        {
            db.ref("users/PES1201800032/attendance/UE18CS254").update({ '4-1-20' : newat.value });
        }
        else if(subselected=='UE18CS254' && dateselected=='5-1-20')
        {
            db.ref("users/PES1201800032/attendance/UE18CS254").update({ '5-1-20' : newat.value });
        }
        else if(subselected=='UE18CS255' && dateselected=='1-1-20')
        {
            db.ref("users/PES1201800032/attendance/UE18CS255").update({ '1-1-20' : newat.value });
        }
        else if(subselected=='UE18CS255' && dateselected=='2-1-20')
        {
            db.ref("users/PES1201800032/attendance/UE18CS255").update({ '2-1-20' : newat.value });
        }
        else if(subselected=='UE18CS255' && dateselected=='4-1-20')
        {
            db.ref("users/PES1201800032/attendance/UE18CS255").update({ '4-1-20' : newat.value });
        }
        else if(subselected=='UE18CS255' && dateselected=='5-1-20')
        {
            db.ref("users/PES1201800032/attendance/UE18CS255").update({ '5-1-20' : newat.value });
        }

    }
    else if(srn.value=='PES1201800154')
    {
        if(subselected=='UE18CS251' && dateselected=='1-1-20')
        {
            db.ref("users/PES1201800154/attendance/UE18CS251").update({ '1-1-20' : newat.value });
        }
        else if(subselected=='UE18CS251' && dateselected=='2-1-20')
        {
            db.ref("users/PES1201800154/attendance/UE18CS251").update({ '2-1-20' : newat.value });
        }
        else if(subselected=='UE18CS251' && dateselected=='4-1-20')
        {
            db.ref("users/PES1201800154/attendance/UE18CS251").update({ '4-1-20' : newat.value });
        }
        else if(subselected=='UE18CS251' && dateselected=='5-1-20')
        {
            db.ref("users/PES1201800154/attendance/UE18CS251").update({ '5-1-20' : newat.value });
        }
        else if(subselected=='UE18CS252' && dateselected=='1-1-20')
        {
            db.ref("users/PES1201800154/attendance/UE18CS252").update({ '1-1-20' : newat.value });
        }
        else if(subselected=='UE18CS252' && dateselected=='2-1-20')
        {
            db.ref("users/PES1201800154/attendance/UE18CS252").update({ '2-1-20' : newat.value });
        }
        else if(subselected=='UE18CS252' && dateselected=='4-1-20')
        {
            db.ref("users/PES1201800154/attendance/UE18CS252").update({ '4-1-20' : newat.value });
        }
        else if(subselected=='UE18CS252' && dateselected=='5-1-20')
        {
            db.ref("users/PES1201800154/attendance/UE18CS252").update({ '5-1-20' : newat.value });
        }
        else if(subselected=='UE18CS253' && dateselected=='1-1-20')
        {
            db.ref("users/PES1201800154/attendance/UE18CS253").update({ '1-1-20' : newat.value });
        }
        else if(subselected=='UE18CS253' && dateselected=='2-1-20')
        {
            db.ref("users/PES1201800154/attendance/UE18CS253").update({ '2-1-20' : newat.value });
        }
        else if(subselected=='UE18CS253' && dateselected=='4-1-20')
        {
            db.ref("users/PES1201800154/attendance/UE18CS253").update({ '4-1-20' : newat.value });
        }
        else if(subselected=='UE18CS253' && dateselected=='5-1-20')
        {
            db.ref("users/PES1201800154/attendance/UE18CS253").update({ '5-1-20' : newat.value });
        }
        else if(subselected=='UE18CS254' && dateselected=='1-1-20')
        {
            db.ref("users/PES1201800154/attendance/UE18CS254").update({ '1-1-20' : newat.value });
        }
        else if(subselected=='UE18CS254' && dateselected=='2-1-20')
        {
            db.ref("users/PES1201800154/attendance/UE18CS254").update({ '2-1-20' : newat.value });
        }
        else if(subselected=='UE18CS254' && dateselected=='4-1-20')
        {
            db.ref("users/PES1201800154/attendance/UE18CS254").update({ '4-1-20' : newat.value });
        }
        else if(subselected=='UE18CS254' && dateselected=='5-1-20')
        {
            db.ref("users/PES1201800154/attendance/UE18CS254").update({ '5-1-20' : newat.value });
        }
        else if(subselected=='UE18CS255' && dateselected=='1-1-20')
        {
            db.ref("users/PES1201800154/attendance/UE18CS255").update({ '1-1-20' : newat.value });
        }
        else if(subselected=='UE18CS255' && dateselected=='2-1-20')
        {
            db.ref("users/PES1201800154/attendance/UE18CS255").update({ '2-1-20' : newat.value });
        }
        else if(subselected=='UE18CS255' && dateselected=='4-1-20')
        {
            db.ref("users/PES1201800154/attendance/UE18CS255").update({ '4-1-20' : newat.value });
        }
        else if(subselected=='UE18CS255' && dateselected=='5-1-20')
        {
            db.ref("users/PES1201800154/attendance/UE18CS255").update({ '5-1-20' : newat.value });
        }
    }
}

    
// function updateatt(){
//     changesub();
//     changedate();

//     var query = db.ref('users/PES1201801651/attendance/UE18CS252/');
//     console.log(snapshot.key);
//     // query.once("value")
//     // .then(function(snapshot) {
//     //     snapshot.forEach(function(childSnapshot) {
//     //     // key will be "ada" the first time and "alan" the second time
//     //     var key = childSnapshot.key;
//     //     if(srn.value==key)
//     //     {
//     //         query.ref("users/key/attendance/subselected").update({dateselected : newat.value});
//     //     }
//     //     });
//     // });
// }



