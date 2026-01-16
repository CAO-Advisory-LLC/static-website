import "./styles.css";
import "./header_footer/header.css";
import "./header_footer/footer.css";
import { loadFooter, loadHeader } from "./header_footer/load.js";

function init() {
    console.log("Hello world!");
}
init();


// Load header and footer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadHeader(); // Load header
    loadFooter(); // Load footer
});
