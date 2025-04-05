import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from "../app/home"
import NotFound from "../app/not-found"
import TermsPage from "@/app/security/terms"
import PrivacyPage from "@/app/security/privacy"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route index path="/" element={<HomePage />} />

                <Route index path="/terms" element={<TermsPage />} />
                <Route index path="/privacy" element={<PrivacyPage />} />
            </Routes>
        </BrowserRouter>
    )
}
