import React from 'react';

import App from './App'
import{setupProject} from '../../helpers/project-setup'

setupProject({
    rootElement:(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    ),
    injectExtensionTo:'body',
    injectWebAppTo:'#root'
})