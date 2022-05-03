import logo from './logo.svg';
import './App.css';

function App() {

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

  // Medicine.map((value ,index) => console.log (value.id , value.name));

  let filterData = Medicine.filter((value ,index) => value.expiry >= 2022);
  console.log(filterData);

  let ans=filterData.reduce((acc,value,index) => acc+ value.price ,0);
  console.log(ans);

  return (
    <>
      <table border="1">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Expiry</th>
          <th>total</th>
        </tr>
        {
          filterData.map((valur , index) => {
              return (
                <tr>
                  <td>{valur.id}</td>
                  <td>{valur.name}</td>
                  <td>{valur.price}</td>
                  <td>{valur.expiry}</td>
                  {index === 0 ? <td rowspan={Medicine.length}>{ans}</td> : null}
                </tr>
              )
            }
          )
        }
      </table>
    </>
  );
}

export default App;
