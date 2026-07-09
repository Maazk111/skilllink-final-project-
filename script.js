const searchInput = document.getElementById('search-input');
const cards = document.querySelectorAll('.project-card');
const noResults = document.getElementById('no-results');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    const matches = title.includes(query);
    card.classList.toggle('hidden', !matches);
    if (matches) visibleCount++;
  });

  noResults.classList.toggle('hidden', visibleCount !== 0);
});