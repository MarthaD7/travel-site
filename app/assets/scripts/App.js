import '../styles/styles.css'
import MobileMenu from "./modules/MobileMenu"
import ReavealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

let stickyHeader = new StickyHeader()
new ReavealOnScroll(document.querySelectorAll(".feature-item"), 75)
new ReavealOnScroll(document.querySelectorAll(".testimonial"), 60)

let mobileMenu = new MobileMenu();

if (module.hot) {
    module.hot.accept()
}

