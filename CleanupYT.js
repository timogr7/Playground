var styles = `
    #related,
ytd-section-list-renderer[page-subtype="home"],
#masthead-ad,
ytd-rich-grid-renderer,
ytd-mealbar-promo-renderer
{
    display:none !important;
}
ytd-browse[page-subtype="home"] {
    background-color:gray;
    /* here is my YT background wallpaper, leave it or use a different url */
    background-image:url('https://wallpaperaccess.com/full/2923100.jpg');
    background-size:cover;
	background-attachment:fixed;
    background-position:50% 50%;
	min-height:90vh;
}

#content {
	min-height:100%;
}
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
