import logo from './logo.svg';
import './App.css';
import Contry from './container/contry/Contry';
import City from './container/contry/City';
import CountryFun from './container/contry/CountryFun';
import CityFun from './container/contry/CityFun';
import Branch from './container/contry/Branch';
import Time from './container/Time/Time';
import TimeFun from './container/Time/TimeFun';
import { useEffect, useState } from 'react';
import Home from './container/Home/Home';
import Loading from './components/Loading/Loading';
import Count from './container/Count';

function App() {

  
  const Loadingwithhome = Loading(Home)
  
  const [loading , setloding] = useState(false);
  const [Data, setData] = useState([]);
  
  let orgData = [
    {id:101, name:"ps"},
    {id:102, name:"ai"}
  ]

  useEffect  (
    () => {
      setloding(true);
      setTimeout(() => {setloding(false); setData(orgData)}, 2000);
    },
  [])
  
  console.log(loading, Data);
  
  return (
    <>
      <Loadingwithhome 
        isloading ={loading}
        data={Data}
      />
    <Count />
    </>
  );
}

export default App;
