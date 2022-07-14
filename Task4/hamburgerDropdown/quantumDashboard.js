//Selecting the hamburger class and the menuItems that we want to display.
    const toggle = document.querySelector(".burger");
    const menuItems = document.querySelector(".menu");
    const li = document.querySelector("li");

   
//mouseover and mouseout eventlisteners which will help us display the menu items.
    toggle.addEventListener("mouseover",() => {

        hover();
    });

    toggle.addEventListener("mouseout",() => {

        normal();
        window.addEventListener('resize', normal); //On mouseout calling this function so that we resize the
                                                    //window as per requirement.
    });
    
    
//The hover function 
    const hover = () => {
    
        //items that get displayed when we hover over the hamburger icon.
        menuItems.style.display = "block";
        

    };
    
//The function to bring everything back to normal after we move out of the div that was used for hovering.
    const normal = () => {

        //Basically adding media queries to javascript here.
        if (window.innerWidth < 1025) {
            menuItems.style = `display:none;`
       
          }   
        else{
            menuItems.style = `      
            display: $flex;
            margin-left: auto;
            height: 56px;
            `;
        }
    };
    

    //Functions for making each item display properly when hovering over and out.
    menuItems.addEventListener("mouseover",()=>{
        menuItems.style.display = "block";
    });
   
    menuItems.addEventListener("mouseout",()=>{
        menuItems.style =  
        `
        display:none;
        `

    });



    const content = document.querySelector(".content");

    //Function to display additional element when clicked on the div with content class.
    content.addEventListener("click",()=>{
        
        content.classList.toggle("color-change");
        const drop = document.querySelector(".dropdown");
        drop.classList.add("color-change");
        drop.classList.toggle("visible");
        // dropdown.classList.toggle("dropdown");
        
    })
    
    



    
       
    
  

