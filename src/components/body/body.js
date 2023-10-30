import { useEffect, useState } from "react";

export default function Body(props){
    // console.log(data);


    const [quantity,setQuantity] = useState(0);

    function addHandler(){
        // if (quantity === props.limit) return;
        return(setQuantity((a)=>a+1))
        
    }
    
    function subHandler(){
        // if (quantity === 0) return;

        return(setQuantity((a)=>a-1))
    }


    // function useEffectMan(){
    //     let indexIfExist = props.quantities.findIndex((product)=> product.unique_id === props.unique_id);

        
    //     if(quantity === 0){
    //         if(indexIfExist === -1){
    //             props.setQuantities((prev)=> prev.filter((i)=> i.unique_id !== props.unique_id))

    //         }


    //     }

    //     else{
    //         if(indexIfExist === -1){
    //             props.setQuantities((prev)=>{
    //                  prev[indexIfExist].quantity = quantity;
                       

    //             })
    //         }
    //         else{
    //             props.setQuantities((prev)=>{
    //                 prev.push({unique_id: props.unique_id ,quantity: 1})
    //             })
    //         }
    //     }

        
    // }

    function useEffectBro(){
        let indexIfExist = props.quantities.findIndex(
            (product)=> product.unique_id === props.unique_id
        )

        // here we dont have even single item of that particular item in the cart i.e, quantity == 0  
        // so filtering means not adding those particular items having 0 quantities to the main cart

        if(quantity === 0){
            if(indexIfExist !== -1){
                props.setQuantities((prev)=>{
                    return prev.filter((i) => i.unique_id !== props.unique_id)
                })
            }
        }


        
            // already cart o aa item vundi bro but again want to increase the quantity.
            // already cart o aa item vundi bro but again want to decrease the quantity.

            // already vunna quantity ni idi change chestadi bro.


        else{
            if(indexIfExist !== -1){
                props.setQuantities((prev)=>{
                    prev[indexIfExist].quantity = quantity;
                    return prev;
                })
            }
            else{
                props.setQuantities((prev)=>{
                    prev.push({unique_id: props.unique_id , quantity: 1})
                    return prev;
                })
            }
        }
        // console.log(quantities);

    }

    useEffect(useEffectBro,[quantity]);

    return(
        

        <>

         
            <div className="container flex-center">

            {/* Itembox starts */}

        
            <div className="item-box">

               
                        <figure>

                        <img src={props.img} alt="qwerty" />
                    
                        <figcaption>
                            <h2 align="center" className="item-name">{props.name}</h2>
                            <h2 align="center" className="item-price">{props.cost}</h2>
                            <h3 align="center" className="item-quantity">
                                <button onClick={subHandler} disabled={ quantity === 0 ? true:false }>-</button>
                                <span>{quantity}</span>
                                <button onClick={addHandler} disabled={ quantity === props.limit ? true:false } >+</button>
                            </h3>
                        </figcaption>
                    
                    </figure>
                   
                </div>


            {/* Itembox ends */}

            </div>

          

            
        </>
    )
}