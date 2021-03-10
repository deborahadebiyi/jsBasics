const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

// const newImage = document.createElement('img');
// newImage.setAttribute('src', xxx);
// thumbBar.appendChild(newImage);
/* newImage.setAttribute('src', "./images/pic[i].jpg"); 
using string interpolation for the file path ?
newImage.setAttribute('src', "./images/pic" + ${i} + ".jpg"); this does not work
and all the images disappear*/

/* missing 1st image when for loop condition == for (let i = 0; i < 5; i++),
as image starts at 1, the counter should start at 1 and to include up to image 5 the condition
has to be less than 6 */

//for (initializer; condition; final-expression) {
  // code to run
//}

for (let i = 1; i < 6; i++) {
    const newImage = document.createElement('img');
    const imagePath = `./images/pic${i}.jpg`;
    newImage.setAttribute('src', imagePath);
    thumbBar.appendChild(newImage);
    newImage.onclick = function (i) {
        displayedImage.setAttribute('src', imagePath)
    }
}
/* Wiring up the Darken/Lighten button */
btn.onclick = function darkenLighten() {
    let mode = btn.getAttribute("class");
    if (mode == "dark") {
        btn.setAttribute("class", "light")
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5";
    } else if (mode != "dark") {
        btn.setAttribute("class", "dark")
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0";
    }
}

