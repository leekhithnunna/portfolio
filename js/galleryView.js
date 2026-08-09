// Renders the personal photo grid on about.html from data/gallery.js.

import { galleryData } from './data/gallery.js';
import { openLightbox } from './lightbox.js';

export function initGalleryView() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  galleryData.forEach((photo, index) => {
    const figure = document.createElement('figure');
    figure.className = 'gallery-item reveal';
    figure.setAttribute('data-reveal', '');
    figure.style.setProperty('--reveal-index', index);

    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.alt;
    img.loading = 'lazy';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'gallery-item__btn';
    btn.setAttribute('aria-label', `View larger: ${photo.alt}`);
    btn.appendChild(img);
    btn.addEventListener('click', () => openLightbox(photo.src, photo.alt));

    figure.appendChild(btn);
    grid.appendChild(figure);
  });
}
