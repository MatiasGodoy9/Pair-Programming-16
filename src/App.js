import './App.css';
import { useState } from 'react';


function App() {

  const users = [
    { name: "Juan Roman Riquelme ", id: 1 },
    { name: "Matias Godoy ", id: 2 },
    { name: "Iron Maiden", id: 3 }
  ];

  let usuarios = users.map(user =>( user.name))
  console.log(usuarios)

  const [total, setTotal] = useState(0);

  const [state, setState] = useState({
    num1:"",
    num2:""
  });

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  let suma = parseInt(state.num1) + parseInt(state.num2)

  function sumar() {
    return setTotal(suma)
  }

  return (
    <div className="App">
      <h1>Hola JSX</h1>
      <h3>User names</h3>
      <div>
        <ul>
          <li>{usuarios[0]}</li>
          <li>{usuarios[1]}</li>
          <li>{usuarios[2]}</li>
        </ul>
      </div>

      <div>
        <h2>Sumar dos números</h2>
        <input placeholder="Primer número" type="number" name="num1" onChange={e => handleChange(e)}/>
        <input placeholder="Segundo número" type="number" name="num2" onChange={e => handleChange(e)} />

        <button onClick={sumar}>Sumar</button>
        <p>Total:{total}</p>
    </div>


    </div>
  );
}

export default App;