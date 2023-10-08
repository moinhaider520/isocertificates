import React, { useEffect } from 'react';

function LoadScripts() {
  const scriptUrls = [
    '../../assets/bundles/libscripts.bundle.js',
    '../../assets/bundles/vendorscripts.bundle.js',
    '../../assets/vendor/toastr/toastr.js',
    '../../assets/bundles/c3.bundle.js',
    '../../assets/bundles/mainscripts.bundle.js',
    '../../assets/js/index.js',
  ];

  useEffect(() => {
    const loadScripts = async () => {
      const scriptElements = scriptUrls.map((url) => {
        const script = document.createElement('script');
        script.src = url;
        // The async attribute is removed here
        document.head.appendChild(script);
        return script;
      });

      // Wait for all scripts to load
      await Promise.all(scriptElements.map(waitForScriptLoad));
    };

    const waitForScriptLoad = (script) =>
      new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = reject;
      });

    loadScripts();
  }, []);

  return <div>Loading scripts...</div>;
}

export default LoadScripts;
