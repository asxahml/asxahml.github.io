/* GA4 portfolio analytics: replace the measurement ID below with your own G-XXXXXXXXXX. */
const GA4_MEASUREMENT_ID = 'G-T26VRXSN2E';
const GA4_READY = /^G-[A-Z0-9]+$/.test(GA4_MEASUREMENT_ID) && GA4_MEASUREMENT_ID !== 'G-XXXXXXXXXX';

function initializeAnalytics() {
  if (!GA4_READY || window.__portfolioAnalyticsInitialized) return;
  window.__portfolioAnalyticsInitialized = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){window.dataLayer.push(arguments);};
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA4_MEASUREMENT_ID);
  document.head.appendChild(script);
  gtag('js', new Date());
  gtag('config', GA4_MEASUREMENT_ID, {send_page_view: true});
  const name = window.location.pathname.split('/').pop();
  if (['fleet.html','pricing.html','ga4.html','airbnb.html','mongodb.html','process.html'].includes(name)) {
    gtag('event','project_view',{project_name:name.replace('.html','')});
  }
}
function recordEvent(eventName, properties) {
  if (window.__portfolioAnalyticsInitialized && typeof window.gtag === 'function') {
    window.gtag('event', eventName, properties || {});
  }
}
// Consent is required before analytics starts. No GA4 script or analytics cookies are loaded before opt-in.
function showConsent() {
  if (!GA4_READY) return;
  const saved = localStorage.getItem('portfolio_analytics_consent');
  if (saved === 'accepted') { initializeAnalytics(); return; }
  if (saved === 'declined') return;
  const bar = document.createElement('aside');
  bar.className = 'analytics-consent';
  bar.setAttribute('role','dialog');
  bar.setAttribute('aria-label','Analytics preferences');
  bar.innerHTML = '<p>This site uses optional Google Analytics cookies to understand traffic sources and portfolio interactions. <a href="privacy.html">Privacy details</a>.</p><div><button type="button" data-consent="declined">Decline</button><button type="button" data-consent="accepted">Allow analytics</button></div>';
  document.body.appendChild(bar);
  bar.querySelectorAll('[data-consent]').forEach(button => button.addEventListener('click', () => {
    const choice = button.getAttribute('data-consent');
    localStorage.setItem('portfolio_analytics_consent', choice);
    bar.remove();
    if (choice === 'accepted') initializeAnalytics();
  }));
}
document.addEventListener('DOMContentLoaded', () => {
  showConsent();
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-track]');
    if (!a) return;
    const eventName = a.dataset.track;
    const payload = {link_text:a.textContent.trim().slice(0,90),link_url:a.href};
    if (eventName === 'project_click') payload.project_name = a.getAttribute('href').replace('.html','');
    recordEvent(eventName,payload);
  });
});
