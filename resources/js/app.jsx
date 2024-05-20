import './bootstrap';
import '../css/app.css';
import Cookies from 'js-cookie';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Template from './Layouts/Template';
import {Inertia} from '@inertiajs/inertia';
import { useEffect,useState } from 'react';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';








createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

    root.render(
                <Template>
                    <App {...props} />
                </Template>
    ) ;
            
        
    },
    progress: {
        color: '#4B5563',
    },
});
