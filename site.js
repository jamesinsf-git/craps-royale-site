/* Craps Royale: runtime wiring.
   - Assembles the contact email so Cloudflare Email Obfuscation
     can't rewrite a literal mailto: into a /cdn-cgi/l/email-protection link.
   - Wires the Google Play and App Store badges to the live listings. */

(function () {
  var PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.crapsroyale.craps';
  var APP_STORE_URL  = 'https://apps.apple.com/us/app/craps-royale-beyond-the-table/id6781789179';

  var addr = 'admin' + '@' + 'wallyapps' + '.' + 'com';

  document.querySelectorAll('[data-crmail]').forEach(function (a) {
    a.setAttribute('href', 'mailto:' + addr);
  });
  document.querySelectorAll('[data-crmail-show]').forEach(function (el) {
    el.textContent = addr;
  });
  document.querySelectorAll('[data-playstore]').forEach(function (a) {
    a.setAttribute('href', PLAY_STORE_URL);
  });
  document.querySelectorAll('[data-appstore]').forEach(function (a) {
    a.setAttribute('href', APP_STORE_URL);
  });
})();
