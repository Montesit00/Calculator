import { evaluate } from "mathjs";
import React, { useState } from "react"

function App() {

  const [operacion,setOperacion] = useState('')
  const buttons = ["AC","DEL","%","/",7,8,9,"*",4,5,6,"-",1,2,3,"+",0,'00',",","="]

  const calcularResultado = () => {
    if (operacion) {
      evaluate(operacion);
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  function handleButtons(e) {
     setOperacion(`${e.target.value}`)
  }

  console.log(operacion)

  return (
    <div className='container bug'>
      <h6>Calculadora</h6>
      <div className="calculadora bug">
        <div className='pantalla bug'>
            <input type="text" placeholder="0" value={operacion}/>
          </div>
          <div className='teclas bug'>
                <div className='teclas-num bug'>
                    {buttons.map((e,i) => {
                       if (e === "=") {
                        return <button value={e} key={i} onClick={calcularResultado}>{e}</button> 
                      } else {
                        return <button value={e} key={i} onClick={handleButtons}>{e}</button>
                      }
                    })}
                </div>
          </div>
      </div>    
    </div>
  )
}

export default App
