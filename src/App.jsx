import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { GlobalScoreProvider } from './context/GlobalScoreContext'
import GlobalScoreHeader from './components/layout/GlobalScoreHeader'

const Landing = lazy(() => import('./pages/Landing'))
const Quiz = lazy(() => import('./pages/Quiz'))

function Loader() {
    return (
        <div className="min-h-screen bg-dark-primary flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-accent-cyan border-t-transparent rounded-full animate-spin" />
        </div>
    )
}

export default function App() {
    return (
        <GlobalScoreProvider>
            <GlobalScoreHeader />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Suspense>
        </GlobalScoreProvider>
    )
}
