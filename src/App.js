import './App.css';
import AboutUs from './Component/AboutUs/AboutUs';
import HeroSection from './Component/HeroSection/HeroSection';
import Nav from './Component/Nav/Nav';
import OurServices from './Component/OurServices/OurServices';
import WhyChooseUs from './Component/WhyChooseUs/WhyChooseUs';
import GetQuotation from './Component/GetQuotation/GetQuotation'
import OurServiceComponent1 from './Component/OurServicePage/OurServicesComponent1/OurServiceComponent1';
import OurServiceComponent2 from './Component/OurServicePage/OurServiceComponent2/OurServiceComponent2';
import OurServiceComponent3 from './Component/OurServicePage/OurServiceComponent3/OurServiceComponent3';
import OurServiceComponent4 from './Component/OurServicePage/OurServiceComponent4/OurServiceComponent4';
import OurServiceComponent5 from './Component/OurServicePage/OurServiceComponent5/OurServiceComponent5';
import OurServiceHeroSection from './Component/OurServicePage/OurServiceHeroSection/OurServiceHeroSection';
import ContactUs from './Component/ContactUs/ContactUs';
import PcFooter from './Component/Footer/PcFooter/PcFooter';

function App() {
  return (
    <div className="App">
        <Nav />
        <HeroSection />
        <AboutUs />
        <OurServices />
        <WhyChooseUs />
        <GetQuotation />
        <OurServiceHeroSection />
        <OurServiceComponent1 />
        <OurServiceComponent2 />
        <OurServiceComponent3 />
        <OurServiceComponent4 />
        <OurServiceComponent5 />

        <ContactUs />
        <PcFooter />
     </div>  
  );
}

export default App;
