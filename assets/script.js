'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js-motion');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  document.getElementById('service').value = link.dataset.service;
}));
document.querySelectorAll('#menu a').forEach(link => link.addEventListener('click', () => {
  const menu = document.getElementById('menu');
  if (window.bootstrap && menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
}));
document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !message) { alert('Preencha seu nome e descreva sua necessidade.'); return; }
  const service = document.getElementById('service').value;
  const phone = document.getElementById('phone').value;
  const text = `Olá! Meu nome é ${name}.\nTenho interesse em: ${service}.\n\n${message}`;
  window.location.assign(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`);
});
