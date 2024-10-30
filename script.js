function toggleSkills() {
    const skillsContent = document.querySelector('.skills-content');
    skillsContent.classList.toggle('show');
}

function toggleProjects() {
    const projectsContent = document.querySelector('.projects-content');
    projectsContent.classList.toggle('show');
}

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const question = document.getElementById('question').value;
    
    window.location.href = `mailto:ashritvenugopal@gmail.com?subject=Portfolio Contact from ${name}&body=From: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AQuestion: ${question}`;
}