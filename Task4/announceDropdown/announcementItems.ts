
const announceItems:{
    teacherName: string,
    information:string,
    course:boolean,
    files:string,
    timing:string
}[] = [

    {
        teacherName : "Wilson Kumar",
        information : "No classes will be held on 21st Nov",
        course : false,
        files : "2 files are attached",
        timing : "15-sep-2018 at 07:21 pm"
    },
    {
        teacherName : "Samson White",
        information : "Guest lecture on Geometry on 20th September",
        course : false,
        files : "2 files are attached",
        timing : "15-Sep-2018 at 07:21 pm"
    },
    {
        teacherName : "Wilson Kumar",
        information : "Additional course materials available on request",
        course : true,
        files : "",
        timing : "15-sep-2018 at 07:21 pm"
    },
    {
        teacherName : "Wilson Kumar",
        information : "No classes will be held on 25th Dec",
        course : false,
        files : "",
        timing: "15-sep-2018 at 07:21 pm"
    },
    {
        teacherName : "Wilson Kumar",
        information : "Additional course materials available on request",
        course : true,
        files : "",
        timing : "15-sep-2018 at 07:21 pm"
    }


];


//Function to create a template for the announcements section.
function announcementsTemplate(items:{
    teacherName: string,
    information: string,
    course: boolean,
    files: string,
    timing: string
}) {
    return(
        `
        
        <div class="list" >
            <div class="teacherInfo">
                <span class="name">PA: ${items.teacherName}</span>
            </div>
            <p class="items">${items.information}</p>
            <span class="course">${items.course ?"Course: Mathematics 101":""}</span>
            <div class="details">
                <span class="details-content">${items.files}</span>
                <span class="details-content">${items.timing}</span>
            </div> 
            
        </div>
        
        `
    )
};

//Getting the div to which we want to append the dynamically created elements.
const announce = document.querySelector(".announce-items");
 
//Appending the elements to the div.
announce.innerHTML = `
    ${announceItems.map(announcementsTemplate).join("")}
`;

//Mapping through the data and adding elements dynamically.
