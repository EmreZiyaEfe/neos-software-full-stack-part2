import './App.css';
import Urunbox from './Components/Urunbox';

function App() {

  let x = 20;
  let y = 30; 
  let z = 50;
  const sonuc = (x + y + z) / 3;
  
  return (
    <div className="App">
      {/* <h1>selam bu ilk projemiz</h1>
      <h2 className="test">Emre</h2> */}

      {/* <h3>İki Sayının Toplamı : {x+y}</h3> */}

      {/* <h3>Ortalama : {sonuc}</h3> */}

      <Urunbox/>

    </div>
  );
}

export default App;
