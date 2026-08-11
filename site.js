/* Craps Royale — runtime wiring.
   - Assembles the contact email so Cloudflare Email Obfuscation
     can't rewrite a literal mailto: into a /cdn-cgi/l/email-protection link.
   - Wires App Store badges to the live listing.
   Edit APP_STORE_URL below when the App Store listing is live. */

(function () {
  var APP_STORE_URL = 'https://play.google.com/store/apps/details?id=com.crapsroyale.craps';

  var addr = 'admin' + '@' + 'wallyapps' + '.' + 'com';

  document.querySelectorAll('[data-crmail]').forEach(function (a) {
    a.setAttribute('href', 'mailto:' + addr);
  });
  document.querySelectorAll('[data-crmail-show]').forEach(function (el) {
    el.textContent = addr;
  });
  document.querySelectorAll('[data-appstore]').forEach(function (a) {
    a.setAttribute('href', APP_STORE_URL);
  });
})();
