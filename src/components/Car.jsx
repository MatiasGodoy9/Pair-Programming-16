import React from 'react'

class Auto {
    render() {
        return <h2>Soy un auto</h2>
    }
}

function Car(props) {
    return <h2>Soy un Auto {props.color}</h2>;
  }
  
  function Garage() {
    return (
      <>
        <h1>Quién sos vos?</h1>
        <Car color="rojo"/>
      </>
    );
  }
  

export default Garage;