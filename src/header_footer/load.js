// until I figure out how to access/find non-JS files from a JS file, this workaround will have to do
// also, the "temp logo.jpg" will not show because of the above problem
const headerHTML =
`
<header class="site-header">

    <img src="./assets/imgs/temp logo.jpg" class="logo" alt="A very blurry logo.">

    <ul class="links">
        <li class="link1"><a href="#">header link 1</a></li>
        <li class="link2"><a href="#">header link 2</a></li>
        <li class="link3"><a href="#">header link 3</a></li>
    </ul>

</header>
`;
export function loadHeader() {
    // get html file as a string

    // Insert the HTML into the target element
    const element = document.getElementById("header");
    if (element) {
        element.innerHTML = headerHTML;
    }
    else {
        throw new Error(`Element with ID "header" not found`);
    }

    /*
    add interactions (buttons, hover over responses, etc.) here
    */

}



const footerHTML =
`
<footer class="site-footer">

    <div class="copyright">© 2026 CAO Advisory LLC. All rights reserved.</div>

</footer>
`;
export function loadFooter() {
    // get html file as a string

    // Insert the HTML into the target element
    const element = document.getElementById("footer");
    if (element) {
        element.innerHTML = footerHTML;
    }
    else {
        throw new Error(`Element with ID "footer" not found`);
    }

    /*
    add interactions (buttons, hover over responses, etc.) here
    */

}
