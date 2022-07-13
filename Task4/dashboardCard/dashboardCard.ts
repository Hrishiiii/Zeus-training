//Data that will go inside the cards.
const cardData:{
    imgLocation: string,
    altText: string,
    chapter: string,
    starIcon: string,
    starAlt: string,
    information: string,
    credits: string,
    unitsNumber: string,
    units: string,
    lessonNumber: string,
    lessons: string,
    topicNumber: string,
    topics: string,
    teacherClass: string,
    arrowImg: string,
    arrowImgAlt: string,
    date: string,
    blurry: boolean
}[] =
[
    {
        imgLocation:"images/imageMask.png",
        altText:"imageMask",
        chapter:"Acceleration",
        starIcon:"icons/favourite.svg",
        starAlt: "star-icon",
        information: "Physics | Grade 7 ",
        credits:"+2",
        unitsNumber:"4",
        units:"Units",
        lessonNumber:"18",
        lessons:"Lessons",
        topicNumber:"24",
        topics:"Topics",
        teacherClass:"Mr. frank's Class B",
        arrowImg:"icons/arrow-down.svg",
        arrowImgAlt:"arrow-down",
        date: "50 Students | 21-Jan-2020 - 21-Aug-2020",
        blurry: false
    },
    {
        imgLocation:"images/imageMask-1.png",
        altText:"imageMask-1",
        chapter:"Displacement, Velocity and Speed",
        starIcon:"icons/favourite.svg",
        starAlt: "star-icon",
        information: "Physics | Grade 6 ",
        credits:"+3",
        unitsNumber:"2",
        units:"Units",
        lessonNumber:"15",
        lessons:"Lessons",
        topicNumber:"20",
        topics:"Topics",
        teacherClass:"No Classes",
        arrowImg:"icons/arrow-down.svg",
        arrowImgAlt:"arrow-down",
        date: "",
        blurry: true
    },
    {
        imgLocation:"images/imageMask-3.png",
        altText:"imagemask-3",
        chapter:" Introduction to Biology: Micro organisms and how they affect the other Life Systems in En...",
        starIcon:"icons/favourite.svg",
        starAlt: "star-icon",
        information: "Biology | Grade 4 ",
        credits:"+1",
        unitsNumber:"5",
        units:"Units",
        lessonNumber:"16",
        lessons:"Lessons",
        topicNumber:"22",
        topics:"Topics",
        teacherClass:"All Classes",
        arrowImg:"icons/arrow-down.svg",
        arrowImgAlt:"arrow-down",
        date: "300 Students",
        blurry: true
    },
    {
        imgLocation:"images/imageMask-2.png",
        altText:"imageMask-2",
        chapter:"Introduction to High School Mathematics",
        starIcon:"icons/favourite.svg",
        starAlt: "star-icon",
        information: "Mathematics | Grade 8 ",
        credits:"+3",
        unitsNumber:"",
        units:"",
        lessonNumber:"",
        lessons:"",
        topicNumber:"",
        topics:"",
        teacherClass:"Mr. frank's Class B",
        arrowImg:"icons/arrow-down.svg",
        arrowImgAlt:"arrow-down",
        date: "44 Students | 14-Oct-2019 - 20-Oct-2020",
        blurry: false

    }
    
]


// Function which maps every element from JSON to html template of cards
function cardTemplate(datas:{
    imgLocation: string,
    altText: string,
    chapter: string,
    starIcon: string,
    starAlt: string,
    information: string,
    credits: string,
    unitsNumber: string,
    units: string,
    lessonNumber: string,
    lessons: string,
    topicNumber: string,
    topics: string,
    teacherClass: string,
    arrowImg: string,
    arrowImgAlt: string,
    date: string,
    blurry: boolean
}){
 
    return (`
    
<div class="main-card"  tabindex="0">
    <div class="card-1">
        <img src="${datas.imgLocation}" alt="${datas.altText}"/>
        <div class="content1">
            <div class="card-heading">
                <span class="chapters">${datas.chapter}</span>
                <img src="${datas.starIcon}" alt="${datas.starAlt}" />
            </div>

            <p class="info">
            ${datas.information} <span class="num">${datas.credits}</span>
            </p>
            <p class="units">
                <strong>${datas.unitsNumber}</strong> ${datas.units} <strong>${datas.lessonNumber}</strong> ${datas.lessons}
                <strong>${datas.topicNumber}</strong> ${datas.topics}
            </p>

            <div id="teacher">
                <span class="teacher-name">${datas.teacherClass}</span>
                <img src="${datas.arrowImg}" alt="${datas.arrowImgAlt}" />
            </div>
            <hr />
            <p class="date">${datas.date}</p>
        </div>
    </div>
        <div class="card-icon">
            <img src="icons/preview.svg" alt="eye-logo" class="icon-1" />
            <img
            src="icons/manage course.svg"
            alt="calendar-logo"
            class="icon-2 ${datas.blurry ? 'blurry':""}"
            />

            <img
            src="icons/grade submissions.svg"
            alt="submission-logo"
            class="icon-3 ${datas.blurry ? 'blurry':""}"
            />
            <img src="icons/reports.svg" alt="reports-logo" class="icon-4" />
        </div>
</div>

  
      `
      )

      
}

// Finally adding the html template to the div having .main-container class.
document.querySelector(".main-container").innerHTML = 
`${cardData.map(cardTemplate).join("")}`;

    

  



   



