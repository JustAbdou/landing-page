import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import './app/globals.css'

function PrivacyApp() {
    return (
        <div className="App">
            <Header />
            <main>
                <PrivacyPolicy />
            </main>
            <Footer />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <PrivacyApp />
    </React.StrictMode>,
)
