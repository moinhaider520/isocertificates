import React, { useEffect } from 'react';

function Footer() {
    useEffect(() => {
        loadScripts();
    }, []);

    const loadScripts = () => {
        const scriptUrls = [
            '/assets/bundles/libscripts.bundle.js',
            '/assets/bundles/vendorscripts.bundle.js',
            '/assets/vendor/toastr/toastr.js',
            '/assets/bundles/c3.bundle.js',
            '/assets/bundles/mainscripts.bundle.js',
            '/assets/js/index.js'
        ];

        // Load scripts in sequence
        const loadScript = (index) => {
            if (index < scriptUrls.length) {
                const script = document.createElement('script');
                script.src = scriptUrls[index];
                script.async = false;

                script.onload = () => {
                    // When this script is loaded, load the next one
                    loadScript(index + 1);
                };

                script.onerror = () => {
                    // Handle error if needed
                };

                document.head.appendChild(script);
            } else {
                console.log('All scripts loaded.');
            }
        };

        // Start loading scripts
        loadScript(0);
    };

    return null;
}

export default Footer;
