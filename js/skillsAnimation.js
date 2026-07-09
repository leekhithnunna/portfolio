// Renders skill categories/tags from data and animates each category's tags
// into view (staggered) using IntersectionObserver when it scrolls into frame.

import { skillsData } from './data/skills.js';

export function initSkillsAnimation() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  skillsData.forEach((group) => {
    const categoryEl = document.createElement('article');
    categoryEl.className = 'skills__category';

    const title = document.createElement('h3');
    title.className = 'skills__category-title';
    title.textContent = group.category;
    categoryEl.appendChild(title);

    const tagList = document.createElement('div');
    tagList.className = 'skills__tags';

    group.items.forEach((skill, index) => {
      const tag = document.createElement('span');
      tag.className = 'skill-tag';
      tag.textContent = skill;
      tag.style.setProperty('--tag-index', index);
      tagList.appendChild(tag);
    });

    categoryEl.appendChild(tagList);
    container.appendChild(categoryEl);
  });

  const categories = Array.from(container.querySelectorAll('.skills__category'));

  if (!('IntersectionObserver' in window)) {
    categories.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  categories.forEach((el) => observer.observe(el));
}
