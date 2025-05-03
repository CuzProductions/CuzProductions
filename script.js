document.getElementById('ideaForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: data,
  })
  .then(response => response.ok ? alert('Thanks! Your idea has been sent.') : alert('Submission failed.'))
  .then(() => form.reset())
  .catch(() => alert('Network error.'));
});
