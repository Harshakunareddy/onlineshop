import Body from "./components/body/body";
import Header from "./components/main/header";
import data from "./API/data";
import { useState } from "react";
import Cart from "./components/body/cart";


export default function App(){

  const [quantities,setQuantities] = useState([]);


  const [show,setShow] = useState(false);

  return(
    <>
      <Header setShow={setShow} />

      {/* <Body /> */}
       {data.map((product)=>{
                    
                    
          return(
           <Body {...product} quantities={quantities} setQuantities={setQuantities} />
            
          );
                           
                           
        })}

      <Cart quantities={quantities} show={show} setShow={setShow} />
    </>
  )
}