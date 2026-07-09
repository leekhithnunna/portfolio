// Visitor gate — full-screen entry popup shown on every fresh page load.
// State is tracked in-memory only (no localStorage/sessionStorage), so the
// gate intentionally reappears on every reload.

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

let dismissed = false;

export function initVisitorGate() {
  const gate = document.getElementById('visitor-gate');
  if (!gate || dismissed) return;

  const form = document.getElementById('visitor-gate-form');
  const status = document.getElementById('visitor-gate-status');
  const skipLink = document.getElementById('visitor-gate-skip');
  const submitBtn = document.getElementById('visitor-gate-submit');

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

    submitBtn.disabled = true;
    setStatus('Submitting…', '');

    submitVisitorEntry({ name, email, purpose }).finally(() => {
      closeGate();
    });
  });

  skipLink.addEventListener('click', (event) => {
    event.preventDefault();

    submitVisitorEntry({
      name: 'Not provided',
      email: 'Not provided',
      purpose: 'Skipped/Anonymous',
    }).finally(() => {
      closeGate();
    });
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

function submitVisitorEntry({ name, email, purpose }) {
  const payload = {
    name,
    email,
    purpose,
    timestamp: new Date().toLocaleString(),
    referrer: document.referrer || 'Direct / none',
    userAgent: navigator.userAgent,
  };

  // Fire-and-forget: never block the visitor from reaching the homepage,
  // even if the Formspree endpoint is unreachable or still a placeholder.
  return fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  }).catch(() => {});
}
