let servicesList = [
    {
        title: "Web Apps",
        altTitle: "Web Design & Development",
        imageLink: "images/services icons/app-development.png",
        altText: "Web Applications icon",
        mainPageLink: "#",
        projectType: "Web Application",
    },
    {
        title: "Mobile Apps",
        altTitle: "Web Applications",
        imageLink: "images/services icons/application.png",
        altText: "Web Applications icon",
        mainPageLink: "#",
        projectType: "Web Application",
    },
    {
        title: "Desktop Apps",
        altTitle: "Web Applications",
        imageLink: "images/services icons/coding.png",
        altText: "Web Applications icon",
        mainPageLink: "#",
        projectType: "Web Application",
    },
    {
        title: "UX/UI Design",
        altTitle: "Web Applications",
        imageLink: "images/services icons/ux-design.png",
        altText: "Web Applications icon",
        mainPageLink: "#",
        projectType: "Web Application",
    },
    {
        title: "Graphic Design",
        altTitle: "Web Applications",
        imageLink: "images/services icons/design-software.png",
        altText: "Web Applications icon",
        mainPageLink: "#",
        projectType: "Web Application",
    },
    {
        title: "Photo Editing",
        altTitle: "Web Applications",
        imageLink: "images/services icons/photo-editing.png",
        altText: "Web Applications icon",
        mainPageLink: "#",
        projectType: "Web Application",
    },
    {
        title: "Photo Restoration",
        altTitle: "Web Applications",
        imageLink: "images/services icons//old.png",
        altText: "Web Applications icon",
        mainPageLink: "#",
        projectType: "Web Application",
    },
    {
        title: "Video Editing",
        altTitle: "Web Applications",
        imageLink: "images/services icons/montage.png",
        altText: "Web Applications icon",
        mainPageLink: "#",
        projectType: "Web Application",
    },
];

let servicesContents = '';

servicesList.forEach(p => {
    servicesContents += `
        <div class="col-xl-3 col-md-3 col-sm-6 py-3 d-flex align-items-stretch">
            <a href="${p["mainPageLink"]}" class="thumbnail-link">
                <div class="card thumbnail-card">
                    <img 
                        src="${p["imageLink"]}" 
                        class="card-img-top" 
                        alt="${p["altText"]}"
                    > 
                    <div class="card-description">
                        <div class="row">
                            <div class="col">
                                <h4 class="card-description-title TurnToCaps">${p["title"]}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `
});

document.querySelector("#services-list").innerHTML = servicesContents;