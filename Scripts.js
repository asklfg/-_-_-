function Display_Content(event, sectionId) {
    event.preventDefault();

    const panels = document.querySelectorAll('.content-panel');
    panels.forEach((panel) => {
        panel.classList.remove('active');
        panel.style.display = 'none';
    });

    const selectedPanel = document.getElementById(sectionId);
    if (selectedPanel) {
        selectedPanel.style.display = 'block';
        selectedPanel.classList.add('active');
    }

    const menuLinks = document.querySelectorAll('#AssessmentMenu a');
    menuLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('onclick') === `Display_Content(event, '${sectionId}')`);
    });
}

function Filter_Menu() {
    const searchInput = document.getElementById('AssessmentSearch');
    const filter = (searchInput ? searchInput.value : '').toLowerCase();
    const menuItems = document.querySelectorAll('#AssessmentMenu li');

    menuItems.forEach((item) => {
        const label = item.textContent.trim().toLowerCase();
        item.style.display = label.includes(filter) ? '' : 'none';
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const defaultPanel = document.getElementById('General_ACR');
    if (defaultPanel) {
        defaultPanel.style.display = 'block';
    }

    const defaultLink = document.querySelector('#AssessmentMenu a');
    if (defaultLink) {
        defaultLink.classList.add('active');
    }
});
