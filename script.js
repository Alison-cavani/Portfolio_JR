// Tema claro/escuro
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Formulário (simulação - sem backend ainda)
const form = document.getElementById('formContato');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Obrigado pela mensagem! Em breve entrarei em contato.');
    form.reset();
});

// Animação de rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth' });
    });
});