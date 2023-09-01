"use strict"
//IS CALLED TO CREATE THE OUTLINE FOR EACH COFFEE PRODUCT
function renderCoffee(coffee) {
    var html = '<div class="coffee col-4" id="coffee" style="list-style: none">';
    html += '<h1 style="font-size: 30px" class="coffeeName">' + coffee.name + '</h1>';
    html += '<h3 class="coffeeRoast">' + coffee.roast + '</h3>';
    html += '</div>';

    return html;
}
//CREATES THE HTML CODE THAT WILL BE FILTERED INTO THE DISPLAY FOR COFFEE
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
var search = document.getElementById("search")
var roastselect = document.getElementById("roast-selection")
//Filters Roast TODO: Filter out results based on values
roastselect.addEventListener("change",
    (event)=>{
    switch (roastSelection.value){
        case "All":
            alert("All");
            break;
        case "1":
            alert("1");
            break;
        case "2":
            alert("2");
            break;
        case "3":
            alert("3");
            break;
    }
    })
//Searches Coffee Input
search.addEventListener("keyup", (event)=>{
        let text = document.getElementById("coffee")
        let coffeeproduct = document.getElementsByClassName("coffee")
        let input = document.getElementById("search").value
        input=input.toLowerCase()





        let noResults = true;
        for (let i = 0; i < coffeeproduct.length; i++) {
            if (!coffeeproduct[i].innerHTML.toLowerCase().includes(input)) {
                coffeeproduct[i].style.display="none";
                continue;
            }
            else {
                coffeeproduct[i].style.display="block";
                noResults = false;
            }
        }
})

// document.addEventListener('keydown',hi)
// input1.addEventListener("keydown", (event)=>{
//     console.log(event.key)
// })