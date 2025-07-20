const searchInput = document.getElementById('search');
const containers = document.querySelectorAll('.container');

searchInput.addEventListener('input', () => {
  const value = searchInput.value.trim().toLowerCase();

  containers.forEach(container => {
    const name = container.dataset.name.toLowerCase();
    const isVisible = name.includes(value);
    container.style.display = isVisible ? 'block' : 'none';
  });

  if (value === '') {
    containers.forEach(container => {
      container.style.display = 'block';
    });
  }
});