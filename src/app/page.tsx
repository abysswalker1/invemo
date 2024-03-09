import "./main.css";
import Hero from "./components/_sections/hero/Hero";
import AssetManagement from "./components/_sections/AssetManagement/AssetManagement";
import Exchange from "./components/_sections/Exchange/Exchange";
import Partners from './components/_sections/Partners/Partners';
import Careers from "./components/_sections/Careers/Careers";
import Contact from "./components/_sections/Conatcts/Contact";
import Footer from "./components/footer/Footer";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Invemo',
  description: '...',
}

export default function Home() {
  return (
    <main>
      <Hero />    
      <div className="main_content">
        <div className="container main-container">
          <AssetManagement />
          <Exchange />
          <Partners />
          <Careers />
          <Contact />
          <Footer />
        </div>
      </div>  
    </main>
  );
}
