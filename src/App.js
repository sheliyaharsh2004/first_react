import logo from './logo.svg';
import './App.css';
import Contry from './container/contry/contry';
import City from './container/contry/city';
import CountryFun from './container/contry/CountryFun';
import CityFun from './container/contry/CityFun';

function App() {

  return (
    <>
      <Contry />
      <br/><br/>
      <City />

      <CountryFun gbpval={5.4}/>
      <CityFun />
    </>
  );
}

export default App;
