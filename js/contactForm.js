// Front-end-only contact form validation + UX feedback. No backend/network call.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

    setStatus('Sending…', '');
    window.setTimeout(() => {
      setStatus("Thanks! Your message has been noted — I'll get back to you soon.", 'success');
      form.reset();
      Object.values(fields).forEach(({ input }) => input.closest('.form__group').classList.remove('has-error'));
    }, 600);
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
