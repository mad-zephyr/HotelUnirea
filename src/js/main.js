const   roomBtn = document.getElementById('room_picker'),
        roomDropDown = roomBtn.querySelector('.room'),
        menuBtn = document.querySelector('.menu'),
        menuDropDown = document.querySelector('.header_drop_down'),
        menuTitle = document.querySelector(".menu_title"),
        menuTitle2 = document.querySelector(".menu_title2");
    

roomBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    if (roomDropDown.style.display == "" || roomDropDown.style.display == "none") {
        roomDropDown.style.display = "block";
    } else if (roomDropDown.style.display =="block" ){
        roomDropDown.style.display = "none";
    } 
});

menuBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    menuBtn.classList.toggle("menu_cliked");
    menuTitle.classList.toggle('title_clicked');
    menuTitle2.classList.toggle('title2_clicked');

    if (window.innerWidth <= 547 ){ 
        if (menuDropDown.style.top == "-580px" || menuDropDown.style.top == "" ) {
            menuDropDown.style.top = "70px"; 
        } else  { 
            menuDropDown.style.top = "-580px";
        }

    } else if (window.innerWidth > 547  ){
        if (menuDropDown.style.top == "-85vh" || menuDropDown.style.top == "") {
            menuDropDown.style.top = "15vh";
        } else  { menuDropDown.style.top == "15vh";
            menuDropDown.style.top = "-85vh";
        } 
    } 
});

function reportWindowSize() {
    if (window.innerWidth <= 547  && menuDropDown.style.top == "15vh") { 
        menuDropDown.style.top = "70px";
    } else if (window.innerWidth > 547  && menuDropDown.style.top == "70px"){
        menuDropDown.style.top = "15vh";
    }
  }

window.addEventListener('resize', reportWindowSize);


console.log(menuBtn);
console.log(menuDropDown);

// console.log(roomBtn);
// console.log(roomDropDown);