import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import ContactUs from '../pages/ContactUs';
import Faq from '../pages/Faq';


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;