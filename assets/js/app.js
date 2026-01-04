// Import functions that initialize each section of the website
import initHeader from './header.js';
import initHero from './hero.js';
import initAbout from './about.js';
import initService from './service.js';
import initProperty from './property.js';
import initContact from './contact.js';
import initFooter from './footer.js';
import initBackTop from './backTop.js';

// Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHero();
  initAbout();
  initService();
  initProperty();
  initContact();
  initFooter();
  initBackTop();
});
