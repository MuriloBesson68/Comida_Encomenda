import { useState } from "react";




function Contato(){
   const [contato1, setContato1] = useState('')
   const [nome, setNome] = useState('')
   const [email, setEmail] = useState('')
    const [escolaridade, setEscolaridade] = useState('')
   return(
      
         <div>
           <h2>Contato</h2>
           <br></br>
           <br></br>
           <form>Nome:
            
            <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder= {`Digite seu ${contato1}`}
            />
            </form>
            <br></br>
            <form>Email:
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder= {`Digite seu ${contato1}`}
            />
            </form>
<br></br>
            <form>Sexo:
           
           <input
             type="radio"
             value="Masculino"
             checked={contato1 === "Masculino"}
             onChange={(e) => setContato1(e.target.value)}
           />
           Masculino
           
           
            
           <input
             type="radio"
             value="Feminino"
             checked={contato1 === "Feminino"}
             onChange={(e) => setContato1(e.target.value)}
           />
         Feminino
         </form>
           <br></br>
        <label>Escolaridade: </label>
        <select onChange={(e) => setEscolaridade(e.target.value)} value={escolaridade}>
          <option value="" >Selecione Uma Opção</option>
          <option value="familia"> familia </option>
          <option value="solo"> 1 hospedes </option>
          <option value="casal"> 2 hospedes </option>
        </select>
           
           
           </div>


   )}

export default Contato