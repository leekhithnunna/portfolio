// Renders the IEEE CONECCT 2026 photo grid on research.html from data/conecctGallery.js.

import { conecctGalleryData } from './data/conecctGallery.js';
import { openLightbox } from './lightbox.js';

export function initConecctGallery() {
  const grid = document.getElementById('conecct-gallery-grid');
  if (!grid) return;

  conecctGalleryData.forEach((photo, index) => {
    const figure = document.createElement('figure');
    figure.className = 'conecct-gallery__item reveal';
    figure.setAttribute('data-reveal', '');
    figure.style.setProperty('--reveal-index', index % 7);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'conecct-gallery__btn';
    btn.setAttribute('aria-label', `View larger: ${photo.caption}`);

    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.caption;
    img.loading = 'lazy';
    btn.appendChild(img);
    btn.addEventListener('click', () => openLightbox(photo.src, photo.caption));

    figure.appendChild(btn);
    grid.appendChild(figure);
  });
}
