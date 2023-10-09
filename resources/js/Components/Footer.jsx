import React from 'react';
import Script from 'react-load-script';

function Footer() {
    const scriptUrls = [
        '/assets/bundles/libscripts.bundle.js',
        '/assets/bundles/vendorscripts.bundle.js',
        '/assets/vendor/toastr/toastr.js',
        '/assets/bundles/c3.bundle.js',
        '/assets/bundles/mainscripts.bundle.js',
        // '/assets/js/index.js'
        // Add more script URLs as needed
    ];

    const handleScriptLoad = (scriptUrl) => {
        console.log(`${scriptUrl} has been loaded.`);
    };

    return (
        <>
            {scriptUrls.map((scriptUrl, index) => (
                <Script
                    key={index}
                    url={scriptUrl}
                    onLoad={() => handleScriptLoad(scriptUrl)}
                />
            ))}
        </>
    );
}

export default Footer;
