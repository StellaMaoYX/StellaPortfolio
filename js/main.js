// Copy the contact email to the clipboard, with a select-text fallback
(function () {
  var btn = document.getElementById('copy');
  var email = document.getElementById('email');
  if (!btn || !email) return;
  btn.addEventListener('click', function () {
    var txt = email.textContent;
    function selectFallback() {
      var r = document.createRange();
      r.selectNodeContents(email);
      var s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
      btn.textContent = 'Selected, press Ctrl/Cmd+C';
    }
    try {
      navigator.clipboard.writeText(txt).then(function () {
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = 'Copy email'; }, 1800);
      }, selectFallback);
    } catch (e) { selectFallback(); }
  });
})();
