const image = document.querySelector(".alert");
const alertMenu = document.querySelector(".alert-items");

//Creating the footer that we want inside the alert-items menu when we hover over it.
const alertFooter = document.createElement("div"); 
alertFooter.className = "alert-footer";
alertFooter.innerHTML = "SHOW ALL";
alertMenu.appendChild(alertFooter);


// mouseover event listener.
image.addEventListener("mouseover",() => {
    display();
});

//mouseout event listener
image.addEventListener("mouseout",() => {
    dontDisplay();
});

//This function displays the footer in the alert menus when we hover over it
const display = () =>{
    
    alertMenu.style.display = "block";


}

//This function takes everything back to normal.
const dontDisplay = () => {
    
    alertMenu.style.display = "none";
}