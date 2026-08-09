// Client-side validation, then hands off via a pre-filled mailto: link — the
// same fallback pattern already used by the "Request Resume" button. No
// backend, no third-party form service, no localStorage/sessionStorage.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_EMAIL = 'leekhithnunna@gmail.com';

export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const status = document.getElementById('form-status');
  const fields = {
    name: {
      input: document.getElementById('name'),
      error: document.getElementById('name-error'),
      validate: (value) => (value.trim().length >= 2 ? '' : 'Please enter your name (min. 2 characters).'),
    },
    email: {
      input: document.getElementById('email'),
      error: document.getElementById('email-error'),
      validate: (value) => (EMAIL_PATTERN.test(value.trim()) ? '' : 'Please enter a valid email address.'),
    },
    message: {
      input: document.getElementById('message'),
      error: document.getElementById('message-error'),
      validate: (value) => (value.trim().length >= 10 ? '' : 'Message should be at least 10 characters.'),
    },
  };

  Object.values(fields).forEach(({ input }) => {
    input.addEventListener('blur', () => validateField(input.name));
    input.addEventListener('input', () => {
      if (input.closest('.form__group').classList.contains('has-error')) {
        validateField(input.name);
      }
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isValid = Object.keys(fields).reduce((valid, name) => {
      const fieldValid = validateField(name);
      return valid && fieldValid;
    }, true);

    if (!isValid) {
      setStatus('Please fix the errors above before sending.', 'error');
      return;
    }

    const name = fields.name.input.value.trim();
    const email = fields.email.input.value.trim();
    const message = fields.message.input.value.trim();

    const subject = `Portfolio contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoUrl =
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setStatus('Opening your email app — send it from there to reach me.', 'success');
  });

  function validateField(name) {
    const field = fields[name];
    const group = field.input.closest('.form__group');
    const message = field.validate(field.input.value);

    field.error.textContent = message;
    group.classList.toggle('has-error', Boolean(message));

    return !message;
  }

  function setStatus(message, type) {
    status.textContent = message;
    status.classList.remove('is-success', 'is-error');
    if (type === 'success') status.classList.add('is-success');
    if (type === 'error') status.classList.add('is-error');
  }
}
