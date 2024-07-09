function openProject(projectName) {
    // Simulando conteúdo dinâmico para os projetos
    if (projectName === 'projeto1') {
        document.getElementById('projectTitle').textContent = 'Projeto 1';
        document.getElementById('projectDescription').textContent = 'Descrição detalhada do Projeto 1...';
    } else if (projectName === 'projeto2') {
        document.getElementById('projectTitle').textContent = 'Projeto 2';
        document.getElementById('projectDescription').textContent = 'Descrição detalhada do Projeto 2...';
    }

    // Exibir os detalhes do projeto
    document.getElementById('projectDetails').classList.remove('hidden');
}

function closeProject() {
    // Fechar os detalhes do projeto
    document.getElementById('projectDetails').classList.add('hidden');
}
