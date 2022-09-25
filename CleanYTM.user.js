// ==UserScript==
// @name         Hide YouTube Recommandations In Home Page
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Time is Precious
// @author       You
// @match        *://m.youtube.com/
// @match        *://m.youtube.com/?*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    const newStyle = document.createElement("style")
    newStyle.innerHTML = `
#related,
ytm-section-list-renderer[page-subtype="home"],
#masthead-ad,
ytm-rich-grid-renderer,
ytm-mealbar-promo-renderer
{
    display:none !important;
}
ytm-browse[page-subtype="home"] {
    background-color:gray;
    /* here is my YT background wallpaper, leave it or use a different url */
    background-image:url('https://wallpapercave.com/wp/wp6374897.jpg');
    background-size:cover;
	background-attachment:fixed;
    background-position:50% 50%;
	min-height:90vh;
}
#content {
	min-height:100%;
}
    `
    document.head.appendChild(newStyle)
    // Your code here...
})();
