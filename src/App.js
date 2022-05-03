import logo from './logo.svg';
import './App.css';

function App() {

  //arr
    // let arr= [10,20,30,40,50]; 

    // let arr1 = [...arr];  //copy
    // console.log(arr1);

    // let arr2= [99, ...arr ,100];  //merge
    // console.log(arr2);

    // let [mat ,eng ,guj ,ss ,sci] = arr;  //destructure
    // console.log(guj);

  //obj
    let obj = {
      id:101,
      name:"harsh"
    };

    let obj1 = {...obj};   //copy
    console.log(obj1);

    let obj2 = {   
      ...obj,
      place :'surat',
      name :"ajay"
    };                     //merge   
    console.log(obj2);

    let {id, name} = obj;  //destructure
    console.log(id,name);

  return (
    <>
    </>
  );
}

export default App;
