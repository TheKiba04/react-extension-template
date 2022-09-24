import React from 'react'
import ReactDOM from 'react-dom'

import Popup from './Popup';

const body = document.querySelector('body');
const app = document.createElement('div');

app.id = 'popup-root'
if (body) {
    body.prepend(app)
}

ReactDOM.render(
    <React.StrictMode>
        <Popup />
    </React.StrictMode>, app
)