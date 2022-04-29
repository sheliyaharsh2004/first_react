import logo from './logo.svg';
import './App.css';

function App() {

   //----------//
  //let arr=[10,"harsh",20,30,40,50]
  // console.log();
  // let obj = {
  //   id : 10,
  //   age : 20,
  //   per : 30
  // }
  // console.log(obj.age) //or
  // console.log(obj["id"])
  // ----------//
 
  // ---------- //
  // let a=[10,"harsh",20,30,40,50]
  // let b=[10,"harsh",20,30,40,50]
  // let c=[10,"harsh",20,30,40,50]
  // let d=[10,"harsh",20,30,40,50]
  // let e=[10,"harsh",20,30,40,50]
  // let f=[10,"harsh",20,30,40,50]
  // let g=[10,"harsh",20,30,40,50]
  // let h=[10,"harsh",20,30,40,50]
  // let i=[10,"harsh",20,30,40,50]
  // let j=[10,"harsh",20,30,40,50]
 
  // a.push(99); //add element at last
  // b.unshift(99); //add element at first
  // c.pop(); //remove element at last
  // d.shift(); //remove element at first
  // e.splice(3,0,24); //add element at specific position
  // f.splice(2,1); //remove 1 element from 2 nd index
  // // g.toString(); //convert array into string
  // let res = h.some((a) => a > 100); //check within array,return true/false
  // let resuit = i.find((a) => a > 10); //check within array,return first match element
  // let resuit_2 = Array.isArray(j); //check given element is array or not

  // console.log(a); 
  // console.log(b); 
  // console.log(c); 
  // console.log(d); 
  // console.log(e); 
  // console.log(f); 
  // console.log(g.toString()); 
  // console.log(res); 
  // console.log(resuit); 
  // console.log(resuit_2);
  // ---------- //
  
  const Medicine = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];

  console.log(Medicine.map((i) => {return i}));

  console.log(Medicine.filter((i) => i.expiry > 2022));

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Hello
        </a>
      </header>
    </div>
  );
}

export default App;
