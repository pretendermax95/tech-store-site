const products = [
  {
    title: 'Ноутбук Nova X15',
    description: 'Лёгкий ноутбук для работы и учёбы.',
    category: 'Ноутбуки',
    price: '89 990 ₽',
  },
  {
    title: 'Смартфон Pixel 8',
    description: 'Премиальная камера и быстрый процессор.',
    category: 'Смартфоны',
    price: '69 990 ₽',
  },
  {
    title: 'Умная колонка Echo Max',
    description: 'Качественный звук и голосовой помощник.',
    category: 'Аудио',
    price: '24 990 ₽',
  },
];

const grid = document.getElementById('product-grid');

if (grid) {
  grid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          <span class="tag">${product.category}</span>
          <h3>${product.title}</h3>
          <p>${product.description}</p>
          <div class="meta">
            <strong>${product.price}</strong>
            <span>В наличии</span>
          </div>
        </article>
      `,
    )
    .join('');
}
