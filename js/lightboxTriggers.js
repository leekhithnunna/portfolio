// Wires click-to-enlarge (shared lightbox) onto hand-placed contextual photos —
// e.g. the about.html "Beyond the Code" strip, the research.html conference photo.
// Not a generic gallery: each image is placed in its own context with a caption.

import { openLightbox } from './lightbox.js';

export function initLightboxTriggers() {
  document.querySelectorAll('[data-lightbox-trigger]').forEach((el) => {
    el.addEventListener('click', () => {
      openLightbox(el.dataset.lightboxTrigger, el.dataset.lightboxCaption || el.alt || '');
    });
  });
}
