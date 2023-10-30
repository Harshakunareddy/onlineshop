import data from "../../API/data";

export default function Cart(props){

    // console.log(props.quantities);

    function abc(){
        return(
            props.setShow(false)
        )
    }

    return(

        <>
        {
            props.show &&

            
            <div className="backdrop" onClick={abc}>

            { props.quantities.length !== 0 ? 

                <div className="content-table" align="center">

                    
                <div className="modal">
                    <div className="head-modal flex">
                        <div>Your Cart</div>
                        <div className="cross">
                            X
                        </div>
                    </div>
                    
                </div>
                    <table border={2}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Cost</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                {props.quantities.map((item)=>{
                                    const dataInd = data.findIndex((i)=> i.unique_id === item.unique_id)
                                return(
                                    <tr>
                                        <td>{data[dataInd].name}</td>
                                        <td>{data[dataInd].cost}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.quantity * data[dataInd].cost}</td>
                                    </tr>
                                )
                            })}

                            </tr>
                        </tbody>
                    </table>

                </div>
            :
            <h1>Please add Items Bro!!</h1>
                        }
            </div>

        }
            

        </>
    )

    
}