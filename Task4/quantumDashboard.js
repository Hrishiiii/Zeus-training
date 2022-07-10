
    const toggle = document.querySelector(".hamburger");
    const menuItems = document.querySelector(".menu");

    const dashboard = document.querySelector(".dashboard");
    const admin = document.querySelector(".admin");
    const content = document.querySelector(".content");
    const users = document.querySelector(".users");
    const reports = document.querySelector(".reports");

    
    toggle.addEventListener("mouseover",() => {

        hover();
    });

    toggle.addEventListener("mouseout",() => {

        normal();
    });
    
    

    const hover = () => {
    
        //items that get displayed when we hover over the hamburger icon.
        menuItems.style = `
            display: flex;
            flex-direction: column;
            position: absolute;
            margin-top: 350px;
            width: 280px;
            height: 288px;
            right:16px;
            list-style: none;
            z-index: 1;
            background-color:white;
            
        
        `;

        dashboard.style = `
            height: 48px;
            
        `;

        admin.style = `
            height: 48px;
            
        `;

        content.style = `
            height: 48px;
            
        `;

        users.style = `
            height: 48px;
            
        `;

        reports.style = `
            height: 48px;
            
        `;
        
    };
        
    const normal = () => {

    

            menuItems.style = `
            display: $flex;
            margin-left: auto;
            `;
        
        
    };
    
   
    


