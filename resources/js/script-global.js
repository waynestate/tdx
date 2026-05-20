document.head.insertAdjacentHTML(
    'beforeend',
    '<link rel="preconnect" href="https://fonts.googleapis.com">',
);

document.head.insertAdjacentHTML(
    'beforeend',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
);

document.head.insertAdjacentHTML(
    'beforeend',
    '<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">'
);

document.head.insertAdjacentHTML(
    'beforeend',
    '<link rel="stylesheet" href="https://waynestate.github.io/tdx/resources/css/styles-global.css" />',
);

// After the DOM has fully loaded, inject Google Tag Manager
document.addEventListener('DOMContentLoaded', function() {
    const GTM_ID = 'GTM-N5M76JC';

    // Inject <head>
    const script = document.createElement('script');
    script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
    `;
    document.head.appendChild(script);  

    // Inject <body> <noscript>
    const noscript = document.createElement('noscript');
    noscript.setAttribute('aria-hidden', 'true');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.googletagmanager.com/ns.html?id=' + GTM_ID;
    iframe.style.cssText = 'display:none;visibility:hidden;width:0;height:0';
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);
});
