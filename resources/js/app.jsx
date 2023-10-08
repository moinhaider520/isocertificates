import '../assets/css/main.css';
import '../assets/vendor/font-awesome/css/font-awesome.min.css';
import '../assets/css/main.css';
import '../assets/css/blog.css';
import '../assets/css/inbox.css';
import '../assets/css/chatapp.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import Navbar from './Components/Common/Navbar';
import Leftbar from './Components/Common/Leftbar';
import Rightbar from './Components/Common/Rightbar';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        const currentRoute = window.location.pathname;

        // Conditionally render Sidebar and Rightbar
        const shouldRenderSidebarAndRightbar = currentRoute !== '/' && currentRoute !== 'login' && currentRoute !== '/forgotpassword' && currentRoute !== '/h-menu' && currentRoute !== '/registerprofile';
        root.render(
        <>
        {/* {shouldRenderSidebarAndRightbar && <Navbar />}
        {shouldRenderSidebarAndRightbar && <Leftbar />} */}
        {/* {shouldRenderSidebarAndRightbar && <Rightbar />} */}
        <div id="wrapper" class="theme-cyan">
        <App {...props} />
        </div>
        </>
        )
        ;
    },
    progress: {
        color: '#4B5563',
    },
});
