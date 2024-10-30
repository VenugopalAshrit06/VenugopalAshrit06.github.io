function toggleSkills() {
    document.querySelector('.skills-content').classList.toggle('show');
}

function toggleProjects() {
    document.querySelector('.projects-content').classList.toggle('show');
}

function submitForm(event) {
    event.preventDefault();
    alert("Message sent successfully!");
}
