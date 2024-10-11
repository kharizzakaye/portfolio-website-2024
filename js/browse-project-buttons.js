import data from './projects.json' with { type: 'json' };

let projectsList = data.data;

const selectedProjectPath = window.location.pathname;

let setBrowseButtons = "";
let viewPreviousProject = "";
let viewNextProject = "";

for (let i=0; i < projectsList.length; i++)
{
    projectsList[i].id = i+1;
    
    if (projectsList[i].projectLink == selectedProjectPath)
    {
        // first item
        if (projectsList[i].id == 1)
        {
            viewPreviousProject = projectsList[projectsList.length-1].projectLink;
            viewNextProject = projectsList[i+1].projectLink;
        }
        
        // last item
        else if ( projectsList[i].id == projectsList.length)
        {
            viewPreviousProject = projectsList[i-1].projectLink;
            viewNextProject = projectsList[0].projectLink;
        }

        // middle item
        else
        {
            viewPreviousProject = projectsList[i-1].projectLink;
            viewNextProject = projectsList[i+1].projectLink;
        }
    }
}

setBrowseButtons = `
    <a class="btn btn-outline-light previous-button" href="..${viewPreviousProject}">
        <i class="fas fa-arrow-left button-icon-padding"></i>
        Previous Project
    </a>

    <a class="btn btn-outline-light next-button position-absolute end-0" href="..${viewNextProject}">
        <i class="fas fa-arrow-right button-icon-padding"></i>
        Next Project
    </a>
`;

document.querySelector("#browse-projects-container").innerHTML = setBrowseButtons;
