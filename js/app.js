const startingTime = performance.now();
// Getting the menu ul 
const navBar = document.querySelector('#navbar__list');
console.log(navBar);

//Getting all section ids
const sectionIDs = document.querySelectorAll('section');
console.log("Section ID");
console.log(sectionIDs);

//Adding new list items to the navBar for each section id
const addListItems = (section) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = `<a class="scrollLink" data-target="tab" href="#${section.id}">${section.id}</a>`;
    navBar.appendChild(listItem);
}

//Foreach function for the Nordlist - Section IDs
sectionIDs.forEach(section => {
    addListItems(section);
});

let elementsLi = document.querySelectorAll('ul#navbar__list > li a');

for (let i = 0; i < elementsLi.length; i++) {
    elementsLi[i].addEventListener('click', function (e) {
        // console.log(e.currentTarget); // for see the current element
        if (e.currentTarget.classList.contains('active-class')) {
            // do something if already have class "active-class"
        }
        else {
            for (let j = 0; j < elementsLi.length; j++) {
                elementsLi[j].classList.remove('active-class');
            }
            e.currentTarget.classList.add('active-class');
        }

    });
}


//Scroll function for active section
sectionIDs.forEach((section) =>
    window.addEventListener("scroll", function () {
        if (section.getBoundingClientRect().top + 200 < window.innerHeight &&
            section.getBoundingClientRect().bottom + 200 > window.innerHeight) {
            section.classList.add("your-active-class");
            console.log(section.id);
        } else {
            section.classList.remove("your-active-class");
        }
    })
);

// Function to To top 
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 150) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

//Checking for page performance
const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');