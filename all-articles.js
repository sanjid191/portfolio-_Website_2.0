// Example articles data. Replace or fetch dynamically as needed.
const articles = [
  {
    id: 1,
    title: "Modern Web Development Practices",
    date: "2025-06-15",
    group: "blog",
    tags: ["web", "best practices"],
    excerpt: "An exploration of current best practices in modern web development...",
    url: "article-detail.html?id=1",
    thumb: "assets/images/Articles/CSE.jpg"
  },
  {
    id: 2,
    title: "The Future of UI/UX Design",
    date: "2025-05-28",
    group: "opinion",
    tags: ["design", "uiux"],
    excerpt: "Examining emerging trends that will shape the future of design...",
    url: "article-detail.html?id=2",
    thumb: "assets/images/Articles/SWE.jpg"
  },
  {
    id: 3,
    title: "Getting Started with JavaScript Frameworks",
    date: "2025-04-10",
    group: "tutorial",
    tags: ["javascript", "frameworks"],
    excerpt: "A beginner's guide to popular JavaScript frameworks...",
    url: "article-detail.html?id=3",
    thumb: "assets/images/Articles/Python.jpg"
  },
  {
    id: 1,
    title: "Modern Web Development Practices",
    date: "2025-06-15",
    group: "blog",
    tags: ["web", "best practices"],
    excerpt: "An exploration of current best practices in modern web development...",
    url: "article-detail.html?id=1",
    thumb: "assets/images/Articles/CSE.jpg"
  },
  {
    id: 2,
    title: "The Future of UI/UX Design",
    date: "2025-05-28",
    group: "opinion",
    tags: ["design", "uiux"],
    excerpt: "Examining emerging trends that will shape the future of design...",
    url: "article-detail.html?id=2",
    thumb: "assets/images/Articles/SWE.jpg"
  },
  {
    id: 3,
    title: "Getting Started with JavaScript Frameworks",
    date: "2025-04-10",
    group: "tutorial",
    tags: ["javascript", "frameworks"],
    excerpt: "A beginner's guide to popular JavaScript frameworks...",
    url: "article-detail.html?id=3",
    thumb: "assets/images/Articles/Python.jpg"
  }
  // Add more articles as needed
];

function renderArticles(list) {
  const container = document.getElementById('allArticlesList');
  if (!container) return;
  container.innerHTML = list.map(article => `
    <div class="article-card">
      <img class="article-thumb" src="${article.thumb || 'assets/images/Articles/blog-post-thumb-6.jpg'}" alt="${article.title}">
      <div class="article-title">${article.title}</div>
      <div class="article-meta">${new Date(article.date).toLocaleDateString()} | ${article.group}</div>
      <div class="article-tags">
        ${article.tags.map(tag => `<span>${tag}</span>`).join(' ')}
      </div>
      <div class="article-excerpt">${article.excerpt}</div>
      <a href="${article.url}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
    </div>
  `).join('');
}

function filterAndSortArticles() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const group = document.getElementById('groupSelect').value;
  const sort = document.getElementById('sortSelect').value;
  let filtered = articles.filter(a =>
    (group === 'all' || a.group === group) &&
    (a.title.toLowerCase().includes(search) || a.excerpt.toLowerCase().includes(search) || a.tags.some(t => t.toLowerCase().includes(search)))
  );
  if (sort === 'latest') filtered.sort((a, b) => b.date.localeCompare(a.date));
  if (sort === 'oldest') filtered.sort((a, b) => a.date.localeCompare(b.date));
  if (sort === 'az') filtered.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === 'za') filtered.sort((a, b) => b.title.localeCompare(a.title));
  renderArticles(filtered);
}

document.addEventListener('DOMContentLoaded', function() {
  // Under development modal logic
  var modal = document.getElementById('devModal');
  var closeBtn = document.getElementById('closeDevModal');
  if(modal && closeBtn) {
    modal.classList.add('active');
    closeBtn.onclick = function() { modal.classList.remove('active'); };
    modal.onclick = function(e) { if(e.target === modal) modal.classList.remove('active'); };
  }
  renderArticles(articles);
  document.getElementById('searchInput').addEventListener('input', filterAndSortArticles);
  document.getElementById('groupSelect').addEventListener('change', filterAndSortArticles);
  document.getElementById('sortSelect').addEventListener('change', filterAndSortArticles);
});
