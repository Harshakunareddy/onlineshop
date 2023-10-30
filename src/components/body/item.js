import { useState } from "react"

export default function Item(props){



    const [quantity,setQuantity] = useState(0);

    function addHandler(){
        return(
            setQuantity((a) => (a+1))
        )
    }
    
    function subHandler(){
        return(
            setQuantity((a) => (a-1))
            
        )
    }
    return(
        <>
              {/* Itembox starts */}

        
            <div className="item-box">

               
                        <figure>

                        <img src={props.img} alt="qwerty" />
                    
                        <figcaption>
                            <h2 align="center" className="item-name">{props.name}</h2>
                            <h2 align="center" className="item-price">{props.cost}</h2>
                            <h3 align="center" className="item-quantity">
                                <button onClick={subHandler}>-</button>
                                <span>{quantity}</span>
                                <button onClick={addHandler}>+</button>
                            </h3>
                        </figcaption>
                    
                    </figure>
                   
                </div>
       

            {/* Itembox ends */}
        </>
    )
}