// Shared image lightbox — lazily builds one overlay per page, reused by
// gallery.js (about.html) and certificateGallery.js (achievements.html).

let overlay = null;
let imgEl = null;
let captionEl = null;
let lastFocusedEl = null;

function ensureLightbox() {
  if (overlay) return;

  overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.hidden = true;
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');

  overlay.innerHTML = `
    <div class="lightbox__overlay" data-lightbox-close></div>
    <div class="lightbox__dialog" role="document">
      <button type="button" class="lightbox__close" data-lightbox-close aria-label="Close image preview">&times;</button>
      <img class="lightbox__img" alt="" />
      <p class="lightbox__caption"></p>
    </div>
  `;

  document.body.appendChild(overlay);
  imgEl = overlay.querySelector('.lightbox__img');
  captionEl = overlay.querySelector('.lightbox__caption');

  overlay.querySelectorAll('[data-lightbox-close]').forEach((el) => {
    el.addEventListener('click', closeLightbox);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !overlay.hidden) closeLightbox();
  });
}

export function openLightbox(src, caption) {
  ensureLightbox();
  lastFocusedEl = document.activeElement;

  imgEl.src = src;
  imgEl.alt = caption || '';
  captionEl.textContent = caption || '';

  overlay.hidden = false;
  document.body.style.overflow = 'hidden';
  overlay.querySelector('.lightbox__close').focus();
}

function closeLightbox() {
  if (!overlay) return;
  overlay.hidden = true;
  imgEl.src = '';
  document.body.style.overflow = '';
  if (lastFocusedEl) lastFocusedEl.focus();
}
