import React, {useEffect} from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import {Home, About, Contact, 
   Owner, CrossBorder, Dispatch, 
   ExpediteNationwide, LastMile,
   BoxTruck, Cargo, Sprinter, DryVan, ReeferVan, StraightTruck} from './pages'
import Header from './components/Header'
import Footer from './components/Footer'


const ScrollToTop = () => {
   const { pathname } = useLocation();
 
   useEffect(() => {
     window.scrollTo(0, 0);
   }, [pathname]);
 
   return null;
 };

const App = () => {
   return (
   <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/expedite-nationwide" element={<ExpediteNationwide />} />
            <Route path="/cross-border" element={<CrossBorder />} />
            <Route path="/last-mile" element={<LastMile />} />
            <Route path="/dispatch" element={<Dispatch />} />

            <Route path="/cargo" element={<Cargo />} />
            <Route path="/sprinter" element={<Sprinter />} />
            <Route path="/box-truck" element={<BoxTruck />} />
            <Route path="/straight-truck" element={<StraightTruck />} />
            <Route path="/dry-van" element={<DryVan />} />
            <Route path="/reefer-van" element={<ReeferVan />} />
            
            <Route path="/owner-operators" element={<Owner />} />
            <Route path="/contact" element={<Contact />} />
            <Route
               path="*"
               element={<Navigate to="/" replace />}
            />
      </Routes>
      <Footer />
   </BrowserRouter>
   )
}

export default App