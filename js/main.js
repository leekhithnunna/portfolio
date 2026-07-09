// Entry point — imports and initializes every feature module.

import { initNavbar } from './navbar.js';
import { initThemeToggle } from './themeToggle.js';
import { initTypingEffect } from './typingEffect.js';
import { initScrollReveal } from './scrollReveal.js';
import { initSkillsAnimation } from './skillsAnimation.js';
import { initProjectsFilter } from './projectsFilter.js';
import { initContactForm } from './contactForm.js';
import { initVisitorGate } from './visitorGate.js';
import { achievementsData } from './data/achievements.js';

function renderAchievements() {
  const timeline = document.getElementById('achievements-timeline');
  if (!timeline) return;

  achievementsData.forEach((achievement, index) => {
    const item = document.createElement('li');
    item.className = 'achievement-item reveal';
    item.setAttribute('data-reveal', '');
    item.style.setProperty('--reveal-index', index);

    const date = document.createElement('span');
    date.className = 'achievement-item__date';
    date.textContent = achievement.date;

    const title = document.createElement('h3');
    title.className = 'achievement-item__title';
    title.textContent = achievement.title;

    const org = document.createElement('span');
    org.className = 'achievement-item__org';
    org.textContent = achievement.org;

    const desc = document.createElement('p');
    desc.className = 'achievement-item__desc';
    desc.textContent = achievement.description;

    item.append(date, title, org, desc);
    timeline.appendChild(item);
  });
}

function setFooterYear() {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

document.addEventListener('DOMContentLoaded', () => {
  renderAchievements();
  setFooterYear();

  initVisitorGate();
  initNavbar();
  initThemeToggle();
  initTypingEffect();
  initSkillsAnimation();
  initProjectsFilter();
  initContactForm();

  // Reveal must init last so dynamically-rendered [data-reveal] nodes are observed.
  initScrollReveal();
});
