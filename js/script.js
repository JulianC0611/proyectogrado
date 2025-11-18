
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const nivel = button.dataset.nivel;
  
        courseCards.forEach(card => {
          const textoNivel = card.querySelector('p').textContent.toLowerCase();
          if (nivel === 'todos' || textoNivel.includes(nivel)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });
  