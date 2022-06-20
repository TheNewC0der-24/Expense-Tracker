import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId='b77c216a-f270-47a9-978c-aaaa67a0dea9' language="en-US" >
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
)