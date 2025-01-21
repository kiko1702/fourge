function showDetails(projectId) {
    const modal = document.getElementById("project-details-modal");
    const title = document.getElementById("project-title");
    const description = document.getElementById("project-description");

    // Mock project data
    const projects = [
        { title: "Project One", description: "Detailed description of Project One, highlighting its unique aspects, challenges, and final outcome." },
        { title: "Project Two", description: "Detailed description of Project Two, showcasing the design and construction process in the business district." },
        { title: "Project Three", description: "Detailed description of Project Three, focusing on the luxury features of the beachside apartment complex." }
    ];

    // Update modal content based on the project
    title.innerText = projects[projectId - 1].title;
    description.innerText = projects[projectId - 1].description;

    // Show modal
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("project-details-modal");
    modal.style.display = "none";
}

//Mobile navbar-----------

const navbarh = document.querySelector('.header')
const hambar = document.querySelector('.mobile')

function navbar(){
    navbarh.classList.add('shownavbar')
}

function closenav() {
    navbarh.classList.remove('shownavbar')
}

function openpage(page) {
    window.location.href = page;
}

