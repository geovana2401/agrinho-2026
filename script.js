// 1. EFEITO SANFONA (CLIQUE PARA ABRIR/FECHAR OS TEXTOS)
document.querySelectorAll('.card-title').forEach(title => {
    title.addEventListener('click', () => {
        const card = title.parentElement;
        // Alterna a classe 'active' no cartão clicado
        card.classList.toggle('active');
    });
});

// 2. BOTÃO VOLTAR AO TOPO
const backToTopBtn = document.getElementById('backToTop');

// Monitora a rolagem da página
window.addEventListener('scroll', () => {
    // Se rolar mais de 300 pixels para baixo, mostra o botão
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Executa o clique para subir suavemente
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Subida suave
    });
});
