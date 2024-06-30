import React, { useState, useEffect } from 'react'
import MobileFooter from './MobileFooter/MobileFooter';
import PcFooter from './PcFooter/PcFooter';

function Footer( { activePage, handleItemClick }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const updateMedia = (  ) => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <>
      {isMobile ? <MobileFooter activePage={activePage} handleItemClick={handleItemClick}  /> : 
      <PcFooter activePage={activePage} handleItemClick={handleItemClick}  />}
    </>
  )
}

export default Footer;
