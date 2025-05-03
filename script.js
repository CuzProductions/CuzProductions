document.getElementById('ideaForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: data,
  })
  .then(response => {
    if (response.ok) {
      const successModal = new bootstrap.Modal(document.getElementById('successModal'));
      successModal.show();
      form.reset();
    } else {
      throw new Error('Submission failed');
    }
  })
  .catch(() => {
    alert('Network error. Please try again later.');
  });
});
