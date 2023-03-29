import React,{useState} from "react"

function App() {

  const [characters,setCharacters] = useState({
    deletAll: "",
    delet:"",
    percentage:"",
    division:"",
    seven:7,
    ocho:8,
    nine:9,
    multiply:"",
    four:4,
    five:5,
    six:6,
    subtract:"",
    one:1,
    two:2,
    three:3,
    add:"",
    twozero:0,
    zero:0,
    point:",",
    same:"=",
  })
  
  return (
    <div className='container bug'>
      <h6>Calculadora</h6>
      <div className="calculadora bug">
        <div className='pantalla bug'>
          <input type="text" placeholder="0" />
        </div>
          <div className='teclas bug'>
                <div className='teclas-num bug'>
                    <div>
                        <button name="AC" value={characters.deletAll}/>
                        <button name="DEL" value={characters.delet}/>
                        <button name="%" value={characters.percentage}/>
                        <button name="/" value={characters.division}/>
                    </div>
                    <div>
                        <button name="7" value={characters.seven}/>
                        <button name="8" value={characters.ocho}/>
                        <button name="9" value={characters.nine}/>
                        <button name="*" value={characters.multiply}/>
                    </div>
                    <div>
                        <button name="4" value={characters.four}/>
                        <button name="5" value={characters.five}/>
                        <button name="6" value={characters.six}/>
                        <button name="-" value={characters.subtract}/>
                    </div>
                    <div>
                      <button name="1" value={characters.one}/>
                      <button name="2" value={characters.two}/>
                      <button name="3" value={characters.three}/>
                      <button name="+" value={characters.add}/>
                    </div> 
                    <div>
                      <button name="00" value={characters.twozero}/>
                      <button name="0" value={characters.zero}/>
                      <button name="." value={characters.point}/>
                      <button name="=" value={characters.same}/>
                    </div>
                </div>
          </div>
      </div>    
    </div>
  )
}

export default App
