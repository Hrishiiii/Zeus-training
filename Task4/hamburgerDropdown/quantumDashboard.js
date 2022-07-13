
    const toggle = document.querySelector(".hamburger");
    const menuItems = document.querySelector(".menu");
    const li = document.querySelectorAll("li");
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
            background: #FFFFFF;
            box-shadow: 0px 13px 20px #0000003D;
            border-radius: 2px;
            opacity: 1;
            padding-top: 15px;
            padding-left: 16px;
        `;

        li.style =`
        
       
        text-align: left;
        letter-spacing: 0px;
        text-transform: uppercase;
        opacity: 1;
        `

        dashboard.style = `
            height: 48px;
            color: #1F7A54;
        `;

        admin.style = `
            height: 48px;
            color: #1F7A54;
        `;

        content.style = `
            height: 48px;
            color: #1F7A54;
        `;

        users.style = `
            height: 48px;
            color: #1F7A54;
        `;

        reports.style = `
            height: 48px;
            color: #1F7A54;
        `;
        
    };
        
    const normal = () => {

    

            menuItems.style = `
            display: $flex;
            margin-left: auto;
            `;
        
        
    };
    
   
    


