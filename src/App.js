import logo from './logo.svg';
import './App.css';

function App() {

  const employee = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    }
  ];

  let filterData = employee.filter((d) => d.status == true);
  console.log(filterData);

  let ans = filterData.reduce((acc,d,i) => acc+ d.salary+d.bonus,0);
  console.log(ans);


  return (
    <>
      <table border="1">
        <tr>
          <th>Name</th>
          <th>age</th>
          <th>salary</th>
          <th>bonus</th>
          <th>total</th>
        </tr>
        {
          filterData.map((value , index) => {
              return (
                <tr>
                  <td>{value.name}</td>
                  <td>{value.age}</td>
                  <td>{value.salary}</td>
                  <td>{value.bonus}</td>
                  {index === 0 ? <td rowspan={employee.length}>{ans}</td> : null}
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
