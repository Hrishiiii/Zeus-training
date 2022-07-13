var announceItems = [
    {
        teacherName: "Wilson Kumar",
        information: "No classes will be held on 21st Nov",
        course: false,
        files: "2 files are attached",
        timing: "15-sep-2018 at 07:21 pm"
    },
    {
        teacherName: "Samson White",
        information: "Guest lecture on Geometry on 20th September",
        course: false,
        files: "2 files are attached",
        timing: "15-Sep-2018 at 07:21 pm"
    },
    {
        teacherName: "Wilson Kumar",
        information: "Additional course materials available on request",
        course: true,
        files: "",
        timing: "15-sep-2018 at 07:21 pm"
    },
    {
        teacherName: "Wilson Kumar",
        information: "No classes will be held on 25th Dec",
        course: false,
        files: "",
        timing: "15-sep-2018 at 07:21 pm"
    },
    {
        teacherName: "Wilson Kumar",
        information: "Additional course materials available on request",
        course: true,
        files: "",
        timing: "15-sep-2018 at 07:21 pm"
    }
];
//Function to create a template for the announcements section.
function announcementsTemplate(items) {
    return ("\n        \n        <div class=\"list\" >\n            <div class=\"teacherInfo\">\n                <span class=\"name\">PA: ".concat(items.teacherName, "</span>\n            </div>\n            <p class=\"items\">").concat(items.information, "</p>\n            <span class=\"course\">").concat(items.course ? "Course: Mathematics 101" : "", "</span>\n            <div class=\"details\">\n                <span class=\"details-content\">").concat(items.files, "</span>\n                <span class=\"details-content\">").concat(items.timing, "</span>\n            </div> \n            \n        </div>\n        \n        "));
}
;
//Getting the div to which we want to append the dynamically created elements.
var announce = document.querySelector(".announce-items");
//Appending the elements to the div.
announce.innerHTML = "\n    ".concat(announceItems.map(announcementsTemplate).join(""), "\n");
//Mapping through the data and adding elements dynamically.
