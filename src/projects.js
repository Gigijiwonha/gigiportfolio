'use strict';

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.filter;
    if (filter == null) {
        return;
    }
    handleActiveSelction (event.target);
    filteringProjects (filter);
});

function handleActiveSelction (target) {
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.classList.add('category--selected');
}

function filteringProjects (filter) {
    projectsContainer.classList.add('anim-out');
    
    setTimeout(() => {
        projectsContainer.classList.remove('anim-out');
        projects.forEach((project) => {
            console.log(project.dataset.type);
            if(filter === 'all' || filter === project.dataset.type) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }, 250);
}
