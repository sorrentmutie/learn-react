import { Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { FeaturesPage } from "./FeaturesPage"
import { AboutPage } from "./AboutPage"
import { PricingPage } from "./PricingPage"
import { NotFoundPage } from "./NotFiundPage"

export const MainNavigation = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}  />
            <Route path="/features" element={<FeaturesPage/>}/>
            <Route path="/about"  element={<AboutPage/>}/>
            <Route path="/pricing" element={<PricingPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}