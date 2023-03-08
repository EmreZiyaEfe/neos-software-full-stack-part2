import './App.css';
// import Card from './Components/Card';
// import Favoriler from './Components/Favoriler';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetirCard from './Components/GetirCard';
// import Urunbox from './Components/Urunbox';
// import Header from './Components/Header';
// import Slider from './Components/Slider';
// import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import NavbarBoot from './Components/NavbarBoot';
function App() {

  // let x = 20;
  // let y = 30; 
  // let z = 50;
  // const sonuc = (x + y + z) / 3;
  
  return (
    <div className="App">
      {/* <h1>selam bu ilk projemiz</h1>
      <h2 className="test">Emre</h2> */}

      {/* <h3>İki Sayının Toplamı : {x+y}</h3> */}

      {/* <h3>Ortalama : {sonuc}</h3> */}

      {/* <Urunbox/> */}
      {/* <Header />
      <Slider />
      <Contact /> */}

      {/* <Navbar /> */}

      {/* <Card resim="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" baslik="emre ziya" icerik="efe"/>
      <Card resim="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg" baslik="front-end" icerik="developer"/> */}

      {/* <div className="container">
      <GetirCard cardBody="Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz." cardTitle="Her siparişinize bir kampanya" cardImg="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"/>
      <GetirCard cardBody="Getir’le siparişiniz dakikalar içinde kapınıza gelir." cardTitle="Dakikalar içinde kapınızda" cardImg="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"/>
      <GetirCard cardBody="Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz." cardTitle="Binlerce çeşit mutluluk" cardImg="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"/>
      </div> */}

      {/* <Favoriler /> */}

      <NavbarBoot />
    
    </div>
  );
}

export default App;
