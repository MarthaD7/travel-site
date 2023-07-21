import '../styles/styles.css'
import MobileMenu from "./modules/MobileMenu"
import ReavealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

new StickyHeader()
new ReavealOnScroll(document.querySelectorAll(".feature-item"), 75)
new ReavealOnScroll(document.querySelectorAll(".testimonial"), 60)
new MobileMenu();
let modal

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()
        if (typeof modal == "undefined") {
            import(/* webpackChunckName: "modal" */"./modules/Modal").then(x => {
                modal = new x.default()
                setTimeout(() => modal.openTheModal(), 20)
            }).catch(() => console.log("There was a problem."))
        } else {
            modal.openTheModal()
        }
    })
})

if (module.hot) {
    module.hot.accept()
}

