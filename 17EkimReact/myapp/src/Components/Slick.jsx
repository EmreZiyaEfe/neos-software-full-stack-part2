import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

function Slick() {
  return (
    <OwlCarousel items={3}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
           <div>icerik1</div>  
           <div>icerik1</div>  
           <div>icerik1</div>  
           <div>icerik1</div>  
           <div>icerik1</div>  
           <div>icerik1</div>  
           <div>icerik1</div>  
           
      </OwlCarousel>  
  )
}

export default Slick