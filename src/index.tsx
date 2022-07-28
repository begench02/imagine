import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@pages/App'
import './index.sass'

const rootELement = document.getElementById('root')
const root = createRoot(rootELement)

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)
