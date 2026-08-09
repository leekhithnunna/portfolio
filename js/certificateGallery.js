// Renders the certificate/document grid on achievements.html from data/certificates.js.
// Image entries open in the shared lightbox; PDF-only entries render as document cards
// that open the file directly in a new tab.

import { certificatesData } from './data/certificates.js';
import { openLightbox } from './lightbox.js';

export function initCertificateGallery() {
  const grid = document.getElementById('certificate-grid');
  if (!grid) return;

  certificatesData.forEach((cert, index) => {
    const card = document.createElement('figure');
    card.className = 'certificate-card reveal';
    card.setAttribute('data-reveal', '');
    card.style.setProperty('--reveal-index', index % 6);

    if (cert.image) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'certificate-card__btn';
      btn.setAttribute('aria-label', `View larger: ${cert.title}`);

      const img = document.createElement('img');
      img.src = cert.image;
      img.alt = cert.title;
      img.loading = 'lazy';
      btn.appendChild(img);
      btn.addEventListener('click', () => openLightbox(cert.image, cert.title));

      card.appendChild(btn);
    } else if (cert.pdf) {
      const link = document.createElement('a');
      link.className = 'certificate-card__doc';
      link.href = cert.pdf;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" class="certificate-card__doc-icon">
          <path d="M6 2h9l5 5v15H6V2zm8 1.5V8h4.5L14 3.5zM8 13h8v1.5H8V13zm0 3h8v1.5H8V16zm0-6h4v1.5H8V10z"/>
        </svg>
        <span>PDF document</span>
      `;
      card.appendChild(link);
    }

    if (cert.pdf && cert.image) {
      const pdfLink = document.createElement('a');
      pdfLink.className = 'certificate-card__pdf-link';
      pdfLink.href = cert.pdf;
      pdfLink.target = '_blank';
      pdfLink.rel = 'noopener noreferrer';
      pdfLink.textContent = 'View PDF';
      card.appendChild(pdfLink);
    }

    const caption = document.createElement('figcaption');
    caption.className = 'certificate-card__title';
    caption.textContent = cert.title;
    card.appendChild(caption);

    grid.appendChild(card);
  });
}
