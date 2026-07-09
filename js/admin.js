// Admin login gate for admin.html — hardcoded single-admin credential check.
//
// To change the admin password or add more admins later, update the
// ADMIN_EMAIL / ADMIN_PASSWORD constants above, or extend this to check
// against an array of {email, password} objects for multiple admins.

const ADMIN_EMAIL = "leekhithnunna@gmail.com";
const ADMIN_PASSWORD = "Leekhith@1269";

// Must match VISITOR_LOG_KEY in js/visitorGate.js. Entries are only visible
// here when admin.html is opened on the same browser/device that captured
// them — localStorage does not sync across visitors' devices.
const VISITOR_LOG_KEY = 'visitorGateSubmissions';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('admin-login-form');
  const errorEl = document.getElementById('admin-login-error');
  const passwordInput = document.getElementById('admin-password');
  const loginCard = document.getElementById('admin-login-card');
  const successCard = document.getElementById('admin-success-card');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('admin-email').value.trim();
    const password = passwordInput.value;

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      errorEl.textContent = '';
      loginCard.hidden = true;
      successCard.hidden = false;
      renderVisitorLog();
    } else {
      errorEl.textContent = 'Invalid email or password';
      passwordInput.value = '';
      passwordInput.focus();
    }
  });
});

function renderVisitorLog() {
  const tableBody = document.getElementById('visitor-log-body');
  const emptyMsg = document.getElementById('visitor-log-empty');
  let log = [];

  try {
    log = JSON.parse(localStorage.getItem(VISITOR_LOG_KEY) || '[]');
  } catch {
    log = [];
  }

  tableBody.innerHTML = '';

  if (log.length === 0) {
    emptyMsg.hidden = false;
    return;
  }

  emptyMsg.hidden = true;

  log.slice().reverse().forEach((entry) => {
    const row = document.createElement('tr');
    [entry.name, entry.email, entry.purpose, entry.timestamp, entry.referrer, entry.userAgent].forEach((value) => {
      const cell = document.createElement('td');
      cell.textContent = value;
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  });
}
