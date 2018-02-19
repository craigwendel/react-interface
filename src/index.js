import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import BaseLayout from './components/BaseLayout'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <BaseLayout>
    <App />
  </BaseLayout>,
  document.getElementById('root'))
registerServiceWorker()
