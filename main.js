// // Array  I

// // kitchen Items
// let saltContainer = "salt";
// let pepperContainer = "pepper";
// let chilliContainer = "chilli";
// let turmericContainer = "turmeric" 

// //array syntax
// // let curryPowder = ["salt","pepper","chilli","turmeric"];
// // console.log(curryPowder[0]);

// let kitchenItemsList = document.getElementById('kitchen-items-list')
// let curryPowder = ["Salt","Pepper","Chilli","Turmeric","currypowder"];


// let allLi = document.querySelectorAll("li")


// // method 1
// // for(let powder of curryPowder) {
// //     let li = document.createElement("li");
// //     li.innerText = powder;
// //     KitchenIteamsList.appendChild(li);
// //     console.log(li);
// // }

// //method 2 
// // forEach()
// // curryPowder.forEach( function(powder){
// //     const li = document.createElement("li")
// //      li.innerText = powder;

// //      console.log(kitchenItemsList);
// //      kitchenItemsList.appendChild(li)
// // });

// //step 1 : find all the list items here
// let allListItems = document.querySelectorAll('li')
// let powderArray = [];

// //step 2 : Iterate all list items
// allListItems.forEach(function(listItem){
//   let listItemText = listItem.innerText;
//   // step 3 : push all the list item content to a new array
//   powderArray.push(listItemText);

// });

// console.log(powderArray);
// ----------------------------------------------


// funtions 

function makeAtea(){
    console.log("step 1 : boil the water");
    console.log("step 2 : add milk");
    console.log("step 3 : put the tea powder");
    console.log("step 4 : put the sugar");
    console.log("step 5 : wait for some time");
    console.log("step 6 : pour to a cup");
    console.log("step 7 : tea ready now");
}
function makeATeaOrCoffee(powder){
    console.log(powder)
    console.log("step 1 : boil the water");
    console.log("step 2 : add milk");
    console.log("step 3 : put the coffee powder");
    console.log("step 4 : put the sugar");
    console.log("step 5 : wait for some time");
    console.log("step 6 : pour to a cup");
    console.log("step 7 : tea ready now");
}

makeATeaOrCoffee(arguments);


