// Renders project cards from data, wires up category filter buttons, and
// powers the accessible "View Details" modal popup.

import { projectsData } from './data/projects.js';

const ALL_CATEGORY = 'All';

export function initProjectsFilter() {
  const grid = document.getElementById('projects-grid');
  const filtersBar = document.getElementById('projects-filters');
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');

  if (!grid || !filtersBar || !modal) return;

  const categories = [ALL_CATEGORY, ...new Set(projectsData.map((p) => p.category))];
  let activeCategory = ALL_CATEGORY;
  let lastFocusedEl = null;

  renderFilters();
  renderCards();

  function renderFilters() {
    filtersBar.innerHTML = '';
    categories.forEach((category) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'filter-btn' + (category === activeCategory ? ' is-active' : '');
      btn.textContent = category;
      btn.setAttribute('aria-pressed', String(category === activeCategory));
      btn.addEventListener('click', () => {
        activeCategory = category;
        renderFilters();
        applyFilter();
      });
      filtersBar.appendChild(btn);
    });
  }

  function renderCards() {
    grid.innerHTML = '';
    projectsData.forEach((project) => {
      grid.appendChild(buildCard(project));
    });
    applyFilter();
  }

  function applyFilter() {
    const cards = Array.from(grid.querySelectorAll('.project-card'));
    let visibleCount = 0;

    cards.forEach((card) => {
      const matches = activeCategory === ALL_CATEGORY || card.dataset.category === activeCategory;
      card.classList.toggle('is-hidden', !matches);
      if (matches) visibleCount += 1;
    });

    let emptyMsg = grid.parentElement.querySelector('.projects__empty');
    if (visibleCount === 0) {
      if (!emptyMsg) {
        emptyMsg = document.createElement('p');
        emptyMsg.className = 'projects__empty';
        emptyMsg.textContent = 'No projects match this filter yet.';
        grid.insertAdjacentElement('afterend', emptyMsg);
      }
    } else if (emptyMsg) {
      emptyMsg.remove();
    }
  }

  function buildCard(project) {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.dataset.category = project.category;

    const category = document.createElement('p');
    category.className = 'project-card__category';
    category.textContent = project.category;

    const title = document.createElement('h3');
    title.className = 'project-card__title';
    title.textContent = project.title;

    const desc = document.createElement('p');
    desc.className = 'project-card__desc';
    desc.textContent = project.description;

    const tagList = document.createElement('div');
    tagList.className = 'project-card__tags';
    project.tech.forEach((tech) => {
      const tag = document.createElement('span');
      tag.className = 'project-card__tag';
      tag.textContent = tech;
      tagList.appendChild(tag);
    });

    const footer = document.createElement('div');
    footer.className = 'project-card__footer';

    const link = document.createElement('a');
    link.className = 'project-card__link';
    if (project.githubLink) {
      link.href = project.githubLink;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'View on GitHub →';
    } else {
      link.href = '#';
      link.setAttribute('aria-disabled', 'true');
      link.textContent = 'GitHub link coming soon';
      link.addEventListener('click', (e) => e.preventDefault());
    }

    const detailsBtn = document.createElement('button');
    detailsBtn.type = 'button';
    detailsBtn.className = 'project-card__details-btn';
    detailsBtn.textContent = 'View Details';
    detailsBtn.addEventListener('click', () => openModal(project));

    footer.appendChild(link);
    footer.appendChild(detailsBtn);

    card.append(category, title, desc, tagList, footer);
    return card;
  }

  function openModal(project) {
    lastFocusedEl = document.activeElement;

    modalContent.innerHTML = '';

    const category = document.createElement('p');
    category.className = 'project-card__category';
    category.textContent = project.category;

    const title = document.createElement('h3');
    title.id = 'modal-title';
    title.textContent = project.title;

    const desc = document.createElement('p');
    desc.textContent = project.description;

    const tagList = document.createElement('div');
    tagList.className = 'project-card__tags';
    project.tech.forEach((tech) => {
      const tag = document.createElement('span');
      tag.className = 'project-card__tag';
      tag.textContent = tech;
      tagList.appendChild(tag);
    });

    const link = document.createElement('a');
    link.className = 'btn btn--primary';
    if (project.githubLink) {
      link.href = project.githubLink;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'View on GitHub';
    } else {
      link.href = '#';
      link.textContent = 'GitHub link coming soon';
      link.addEventListener('click', (e) => e.preventDefault());
    }

    modalContent.append(category, title, desc, tagList, link);

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal__close').focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  modal.querySelectorAll('[data-modal-close]').forEach((el) => {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) closeModal();

    if (event.key === 'Tab' && !modal.hidden) {
      const focusable = modal.querySelectorAll('button, a[href]');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}
