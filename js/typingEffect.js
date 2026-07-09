// Animated typing/erasing tagline in the hero section.

const PHRASES = [
  'AI & Full-Stack Developer',
  'NLP Enthusiast',
  'Computer Vision Explorer',
  'Applied AI Researcher',
];

const TYPE_SPEED = 70;
const ERASE_SPEED = 40;
const HOLD_DELAY = 1600;
const NEXT_DELAY = 400;

export function initTypingEffect() {
  const target = document.getElementById('typing-target');
  if (!target) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    target.textContent = PHRASES[0];
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const phrase = PHRASES[phraseIndex];

    if (isDeleting) {
      charIndex -= 1;
    } else {
      charIndex += 1;
    }

    target.textContent = phrase.slice(0, charIndex);

    let delay = isDeleting ? ERASE_SPEED : TYPE_SPEED;

    if (!isDeleting && charIndex === phrase.length) {
      isDeleting = true;
      delay = HOLD_DELAY;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % PHRASES.length;
      delay = NEXT_DELAY;
    }

    window.setTimeout(tick, delay);
  }

  tick();
}
