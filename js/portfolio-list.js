
import data from '../data/projects.json' with { type: 'json' };

const animationEffect = "hvr-grow-rotate";

let projectsList = data.data;
let portfolioContents = '';

projectsList.forEach(p => {
    portfolioContents += `
        <div class="col ${animationEffect}">
            <div class="card h-100 project-card">
                <div class="card-icon mx-auto">
                    <img 
                        src="assets/images/sport.png" 
                        class="card-img-top" 
                        alt="Icon for ${p["title"]}"
                    >                        
                </div>
            </div>

            <a href="${p["projectLink"]}" class="stretched-link"></a>
        </div>
    `
});

document.querySelector("#projects-list").innerHTML = portfolioContents;