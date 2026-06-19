const forms = document.querySelectorAll<HTMLFormElement>('[data-contact-form]');

forms.forEach((form) => {
  const submitButton = form.querySelector<HTMLButtonElement>(
    '[data-contact-submit]',
  );
  const spinner = form.querySelector<SVGElement>('[data-contact-spinner]');
  const submitLabel = form.querySelector<HTMLSpanElement>(
    '[data-contact-submit-label]',
  );
  const status = form.querySelector<HTMLParagraphElement>(
    '[data-contact-status]',
  );
  const statusIcon = form.querySelector<HTMLSpanElement>(
    '[data-contact-status-icon]',
  );
  const statusMessage = form.querySelector<HTMLSpanElement>(
    '[data-contact-status-message]',
  );

  if (
    !submitButton ||
    !spinner ||
    !submitLabel ||
    !status ||
    !statusIcon ||
    !statusMessage
  ) {
    return;
  }

  const defaultLabel = submitLabel.textContent ?? '';
  const submittingLabel = form.dataset.submitting ?? defaultLabel;
  const successMessage = form.dataset.success ?? '';
  const errorMessage = form.dataset.error ?? '';

  const setStatus = (message: string, isError = false) => {
    statusMessage.textContent = message;
    status.classList.remove(
      'hidden',
      'border-(--form-success-border)',
      'bg-(--form-success-surface)',
      'text-(--form-success-text)',
      'border-red-400/30',
      'bg-red-950/40',
      'text-red-200',
    );
    statusIcon.classList.remove(
      'hidden',
      'bg-(--form-success-icon-surface)',
      'text-(--form-success-icon)',
    );
    status.classList.add(
      'flex',
      ...(isError
        ? ['border-red-400/30', 'bg-red-950/40', 'text-red-200']
        : [
            'border-(--form-success-border)',
            'bg-(--form-success-surface)',
            'text-(--form-success-text)',
          ]),
    );

    if (isError) statusIcon.classList.add('hidden');
    else {
      statusIcon.classList.add(
        'bg-(--form-success-icon-surface)',
        'text-(--form-success-icon)',
      );
    }
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.setAttribute('aria-busy', 'true');
    submitButton.classList.add('cursor-wait', 'opacity-70');
    spinner.classList.remove('hidden');
    submitLabel.textContent = submittingLabel;
    status.classList.add('hidden');

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Form submission failed');

      form.reset();
      setStatus(successMessage);
    } catch {
      setStatus(errorMessage, true);
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute('aria-busy');
      submitButton.classList.remove('cursor-wait', 'opacity-70');
      spinner.classList.add('hidden');
      submitLabel.textContent = defaultLabel;
    }
  });
});
