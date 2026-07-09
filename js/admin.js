// Admin login gate for admin.html — hardcoded single-admin credential check.
//
// To change the admin password or add more admins later, update the
// ADMIN_EMAIL / ADMIN_PASSWORD constants above, or extend this to check
// against an array of {email, password} objects for multiple admins.

const ADMIN_EMAIL = "leekhithnunna@gmail.com";
const ADMIN_PASSWORD = "Leekhith@1269";

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
    } else {
      errorEl.textContent = 'Invalid email or password';
      passwordInput.value = '';
      passwordInput.focus();
    }
  });
});
