import Products from './comp/Products';
import Cardd from './comp/Cardd';
import { useState } from 'react';
import './style.css'
function App() {
  const [produit, setproduit]=useState(Products)
  const[show, setshow]=useState(false);
const[id, setid]=useState(5)
  const[name, setname]=useState("")
const[price, setprice]=useState(0)
const [filtragetitle, setfiltragetitle] = useState("");
  const [filtrageprice, setfiltrageprice] = useState(0);
  const filtrage = (e) => {
    e.preventDefault();}
const ajouter=(e)=>{
  e.preventDefault()
  
  let newproduct={
    id: id+1,
    name: name,
    price: price,
    imgSrc: "/img/t6.png",}
    setid(id+1);
    let newlist=[...produit,newproduct]
setproduit(newlist)
  setshow(false)}

  return (
    <div className='app'>
           {produit.map((el,index)=>{return(
      <Cardd key={index} img={el.imgSrc} namee={el.name} price={el.price}/>
     )})}
     <div>
           <input  className='styled' type="button" value="Add to product" onClick={()=>setshow(!show)}/>
    {
        !show?null:(
         <div>
          <hr/>
          <form onSubmit={ajouter}>
            <div>
              <label>Name:</label>
              <input type="text" onInput={(e)=>setname(e.target.value)}/>
            </div>
            <div>
              <label>Price:</label>
              <input type="float" onInput={(e)=>setprice(e.target.value)}/>
            </div>
            <div className='divsub'><input className='styled' type="submit" value="Submit"/></div>
          </form>
        </div>)
    }
    </div>
    </div>
  );
}

export default App;
