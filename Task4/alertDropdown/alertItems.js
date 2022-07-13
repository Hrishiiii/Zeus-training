"use strict";
const alertItems = [
    {
        topic: "License for Introduction to Algebra has been assigned to your school",
        img: false,
        course: "",
        time: "15-Sep-2018 at 07:21 pm",
    },
    {
        topic: "Lesson 3 Practice Worksheet overdue for Amy Santiago",
        img: true,
        course: "Course: Advanced Mathematics",
        time: "15-Sep-2018 at 05:21 pm",
    },
    {
        topic: "23 new students created",
        img: false,
        course: "",
        time: "14-Sep-2018 at 01:21 pm",
    },
    {
        topic: "15 submissions ready for evaluation",
        img: false,
        course: "Course: Basics of algebra",
        time: "13-Sep-2018 at 01:15 pm",
    },
    {
        topic: "License for Basic Concepts in Geometry has been assigned to your...",
        img: false,
        course: "",
        time: "15-Sep-2018 at 07:21 pm",
    },
    {
        topic: "Lesson 3 Practice Worksheet overdue for Sam Diego",
        img: true,
        course: "Course: Advanced Mathematics",
        time: "15-Sep-2018 at 07:21 pm",
    }
];
function alertTemplate(data) {
    return (`
        <div class="main-box">
            <div class="heading">
                <span class="alert-topic">${data.topic}</span> 
                <img src="${data.img ? "icons/checkbox-checked.svg" : "icons/minus.png"}" />
            </div>
            <span class="courses">${data.course}</span>
            <p class="time">${data.time}</p>
        </div>
        
        `);
}
;
document.querySelector(".alert-items").innerHTML = `
${alertItems.map(alertTemplate).join("")}
`;
