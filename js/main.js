// Portfolio scripts: footer year + falling sakura petals.
// Petal size/count/speed are tuned here; petal look and motion are in css/style.css ("Falling petals").

// Footer copyright year
document.getElementById('year').textContent = new Date().getFullYear();
// Falling sakura petals (skipped for users who prefer reduced motion)
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const box = document.querySelector('.petals');
  const count = window.innerWidth < 640 ? 12 : 24;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    const size = 12 + Math.random() * 12;
    p.style.left = Math.random() * 100 + 'vw';
    p.style.width = size + 'px';
    p.style.height = size * 0.8 + 'px';
    p.style.animationDuration = 9 + Math.random() * 10 + 's, ' + (3 + Math.random() * 3) + 's';
    p.style.animationDelay = -Math.random() * 18 + 's, 0s';
    p.style.opacity = 0.5 + Math.random() * 0.5;
    box.appendChild(p);
  }
}
