const announceImg = document.querySelector(".announcements");
const announceMenu = document.querySelector(".announce-items");

const announceFooter = document.createElement("div");
announceFooter.className = "announce-footer";
announceFooter.innerHTML = `
    <span>SHOW ALL</span>
    <span>CREATE NEW</span>
`;
announceMenu.appendChild(announceFooter);



// mouseover event listener.
announceImg.addEventListener("mouseover",() => {
    displayAll();
});

//mouseout event listener
announceImg.addEventListener("mouseout",() => {
    dontDisplayAll();
});

//This function displays the footer in the alert menus when we hover over it
const displayAll = () =>{
    
    announceMenu.style.display = "block";

}

//This function takes everything back to normal.
const dontDisplayAll = () => {
    
    announceMenu.style.display = "none";
}