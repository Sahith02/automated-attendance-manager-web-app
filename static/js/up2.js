const srn = document.getElementById('sSRN');

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

const db = firebase.database();
const usersRef = db.ref('/users');
// var UE18CS251 = db.ref('/UE18CS251');
// var UE18CS252 = db.ref('/UE18CS252');
// var UE18CS253 = db.ref('/UE18CS253');
// var UE18CS254 = db.ref('/UE18CS254');
// var UE18CS255 = db.ref('/UE18CS255');

updateBtn.addEventListener('click', e => {
  e.preventDefault();
  usersRef.child(srn.value).set({
    SRN : srn.value,
    attendance : {
        UE18CS251 : {
            '1-1-2020' : att2511.value,
            '2-1-2020' : att2512.value,
            '4-1-2020' : att2514.value,
            '5-1-2020' : att2515.value,
        },

        UE18CS252 : {
            '1-1-2020' : att2521.value,
            '2-1-2020' : att2522.value,
            '4-1-2020' : att2524.value,
            '5-1-2020' : att2525.value,
        },

        UE18CS253 : {
            '1-1-2020' : att2531.value,
            '2-1-2020' : att2532.value,
            '4-1-2020' : att2534.value,
            '5-1-2020' : att2535.value,
        },

        UE18CS254 : {
            '1-1-2020' : att2541.value,
            '2-1-2020' : att2542.value,
            '4-1-2020' : att2544.value,
            '5-1-2020' : att2545.value,
        },

        UE18CS255 : {
            '1-1-2020' : att2551.value,
            '2-1-2020' : att2552.value,
            '4-1-2020' : att2554.value,
            '5-1-2020' : att2555.value,
        },
    },
    
    });







    



    // UE18CS251.child('UE18CS251').set({
    //     att251_1 : att2511.value,
    //     att251_2 : att2512.value,
    //     att251_4 : att2514.value,
    //     att251_5 : att2515.value,
    // });

    // UE18CS252.child('UE18CS252').set({
    //     att252_1 : att2521.value,
    //     att252_2 : att2522.value,
    //     att252_4 : att2524.value,
    //     att252_5 : att2525.value,
    // });

    // UE18CS253.child('UE18CS253').set({
    //     att253_1 : att2531.value,
    //     att253_2 : att2532.value,
    //     att253_4 : att2534.value,
    //     att253_5 : att2535.value,
    // });

    // UE18CS254.child('UE18CS254').set({
    //     att254_1 : att2541.value,
    //     att254_2 : att2542.value,
    //     att254_4 : att2544.value,
    //     att254_5 : att2545.value,
    // });

    // UE18CS255.child('UE18CS255').set({
    //     att255_1 : att2551.value,
    //     att255_2 : att2552.value,
    //     att255_4 : att2554.value,
    //     att255_5 : att2555.value,
    // });







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

}); 
