// Visitor gate — full-screen entry popup shown on every fresh page load.
// The "dismissed" flag is tracked in-memory only, so the gate intentionally
// reappears on every reload. Submissions themselves are persisted to
// localStorage under VISITOR_LOG_KEY so admin.html can list them — note this
// means entries are only visible from the same browser/device that captured
// them, not centrally across all site visitors.

const VISITOR_LOG_KEY = 'visitorGateSubmissions';

let dismissed = false;

export function initVisitorGate() {
  const gate = document.getElementById('visitor-gate');
  if (!gate || dismissed) return;

  const form = document.getElementById('visitor-gate-form');
  const status = document.getElementById('visitor-gate-status');
  const skipLink = document.getElementById('visitor-gate-skip');

  document.body.classList.add('visitor-gate-open');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('visitor-name').value.trim();
    const email = document.getElementById('visitor-email').value.trim();

    if (!name || !email) {
      setStatus('Please fill in your name and email.', 'error');
      return;
    }

    const purpose = document.getElementById('visitor-purpose').value;

    saveVisitorEntry({ name, email, purpose });
    closeGate();
  });

  skipLink.addEventListener('click', (event) => {
    event.preventDefault();

    saveVisitorEntry({
      name: 'Not provided',
      email: 'Not provided',
      purpose: 'Skipped/Anonymous',
    });
    closeGate();
  });

  function closeGate() {
    dismissed = true;
    gate.hidden = true;
    document.body.classList.remove('visitor-gate-open');
  }

  function setStatus(message, type) {
    status.textContent = message;
    status.classList.remove('is-error');
    if (type === 'error') status.classList.add('is-error');
  }
}

function saveVisitorEntry({ name, email, purpose }) {
  const entry = {
    name,
    email,
    purpose,
    timestamp: new Date().toLocaleString(),
    referrer: document.referrer || 'Direct / none',
    userAgent: navigator.userAgent,
  };

  try {
    const log = JSON.parse(localStorage.getItem(VISITOR_LOG_KEY) || '[]');
    log.push(entry);
    localStorage.setItem(VISITOR_LOG_KEY, JSON.stringify(log));
  } catch {
    // Storage unavailable (e.g. private browsing) — never block the visitor.
  }
}
