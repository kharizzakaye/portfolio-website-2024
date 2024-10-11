
import data from './projects.json' with { type: 'json' };

const animationEffect = "hvr-grow-rotate";

let projectsList = data.data;

// let projectsList = [
    // {
    //     title: "TESDA Registry of Workers Assessed and Certified Management Information System with Certificate Manager",
    //     altTitle: "TESDA",
    //     imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
    //     altText: "alt text",
    //     mainPageLink: "#",
    //     projectType: "Web Application",
    // },
    // {
    //     title: "Retail Management System with Point of sale (POS) and Barcode Technology",
    //     altTitle: "Retail Management System",
    //     imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
    //     altText: "alt text",
    //     mainPageLink: "#",
    //     projectType: "Web Application",
    // },
    // {
    //     title: "Integrated Library Management System",
    //     imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
    //     altTitle: "Library Management System",
    //     altText: "alt text",
    //     mainPageLink: "#",
    //     projectType: "Web Application",
    // },
    // {
    //     title: "Student Health Management System",
    //     imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
    //     altTitle: "Student Health Management",
    //     altText: "",
    //     mainPageLink: "#",
    //     projectType: "Web Application",
    // },
    // {
    //     title: "Weather App",
    //     imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
    //     altTitle: "Weather App",
    //     altText: "weather-app-thumbnail",
    //     mainPageLink: "#",
    //     projectType: "Web Application",
    // },
    // {
    //     title: "Anime Quote Generator",
    //     imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
    //     altTitle: "Anime Quote Generator",
    //     altText: "anime-quote-generator-thumbnail",
    //     mainPageLink: "#",
    //     projectType: "Web Application",
    // },
    // {
    //     title: "Veterinary Appointment",
    //     imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
    //     altTitle: "Veterinary Appointment",
    //     altText: "alt text",
    //     mainPageLink: "#",
    //     projectType: "Web Application",
    // },
    // {
    //     title: "Coin Collection Manager",
    //     imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
    //     altTitle: "Coin Collection Manager",
    //     altText: "alt text",
    //     mainPageLink: "#",
    //     projectType: "Web Application",
    // },
    // {
    //     title: "Expiry Tracker",
    //     imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
    //     altTitle: "Expiry Tracker",
    //     altText: "alt text",
    //     mainPageLink: "#",
    //     projectType: "Web Application",
    // },
    // {
        // title: "Philippine Zip Code Finder",
        // imageLink: "images/project-thumbnails/temp-project-thumbnail.jpg",
        // altTitle: "Philippine Zip Code Finder",
        // altText: "alt text",
        // mainPageLink: "#",
        // projectType: "Web Application",
    // },

// ];

const cardDesignsList = [
    {
        id: 1,
        cardColor: "bg-danger white-text"
    },
    {
        id: 2,
        cardColor: "bg-warning black-text"
    },
    {
        id: 3,
        cardColor: "bg-success white-text"
    },
    {
        id: 4,
        cardColor: "bg-primary white-text"
    },

    {
        id: 5,
        cardColor: "bg-danger white-text"
    },
    {
        id: 6,
        cardColor: "bg-warning black-text"
    },
    {
        id: 7,
        cardColor: "bg-success white-text"
    },
    {
        id: 8,
        cardColor: "bg-primary white-text"
    },
    {
        id: 9,
        cardColor: "bg-danger white-text"
    },
    {
        id:10,
        cardColor: "bg-warning black-text"
    },
    {
        id: 11,
        cardColor: "bg-success white-text"
    },
    {
        id: 12,
        cardColor: "bg-primary white-text"
    }
];

for (let i=0; i < projectsList.length; i++)
{
    projectsList[i].cardColor = cardDesignsList[i].cardColor;
}


let portfolioContents = '';

projectsList.forEach(p => {
    portfolioContents += `
        <div class="col ${animationEffect}">
            <div class="card ${p["cardColor"]} project-card">
                <div class="card-icon mx-auto d-none d-md-block">
                    <img 
                        src="${p["imageLink"]}" 
                        class="card-img-top" 
                        alt="Icon for ${p["title"]}"
                    >                        
                </div>
                <div class="card-body d-xs-block d-md-none">
                    <p>${p["title"]}</p>
                    
                 </div>
            </div>
            <div class="card-icon mx-auto d-none d-md-block">
                <p class="project-title text-white text-center">${p["title"]}</p>
            </div>

            <a href="${p["projectLink"]}" class="stretched-link"></a>
        </div>
    `
});

document.querySelector("#projects-list").innerHTML = portfolioContents;