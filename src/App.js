import Arrivals from "./components/arrivals/Arrivals";
import Brands from "./components/brands/Brands";
import Header from "./components/header/header";
import Promo from "./components/promo/promo";


function App() {

  return (
		<div className="App">
      <Header/>
      <Promo/>
      <Brands/>
      <Arrivals/>
      
     
		</div>
  );
}

export default App;
