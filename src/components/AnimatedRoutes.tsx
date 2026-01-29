import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import About from '../pages/About';
import Resources from '../pages/Resources';
import Contact from '../pages/Contact';
import OurWork from '../pages/OurWork';
import Careers from '../pages/Careers';
import TeamMemberDetail from '../pages/TeamMemberDetail';
import OurWorkDetail from '../pages/OurWorkDetail';
import ResourceDetail from '../pages/ResourceDetail';
import ResourceDetailECCE from '../pages/ResourceDetailECCE';
import ResourceDetailIFC from '../pages/ResourceDetailIFC';
import AdminLogin from '../pages/AdminLogin';
import EmailVerification from '../pages/EmailVerification';
import AdminDashboard from '../pages/AdminDashboard';
import CreateResource from '../pages/CreateResource';
import PageTransition from './PageTransition';

const AnimatedRoutes: React.FC = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/about-us" element={<PageTransition><About /></PageTransition>} />
                <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/our-work" element={<PageTransition><OurWork /></PageTransition>} />
                <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
                <Route path="/about-us/team/:id" element={<PageTransition><TeamMemberDetail /></PageTransition>} />
                <Route path="/our-work/:id" element={<PageTransition><OurWorkDetail /></PageTransition>} />
                <Route path="/resource-detail" element={<PageTransition><ResourceDetail /></PageTransition>} />
                <Route path="/resource-detail-ifc" element={<PageTransition><ResourceDetailIFC /></PageTransition>} />
                <Route path="/resource-detail-ecce" element={<PageTransition><ResourceDetailECCE /></PageTransition>} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/verify" element={<PageTransition><EmailVerification /></PageTransition>} />
                <Route path="/admin/dashboard" element={<PageTransition><AdminDashboard /></PageTransition>} />
                <Route path="/admin/resources/new" element={<PageTransition><CreateResource /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
