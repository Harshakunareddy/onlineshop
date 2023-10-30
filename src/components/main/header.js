import {useState} from "react";

export default function Header(props){

    const [toggle, setToggle] = useState(true);
    
    function abc(){
        return (()=>{
            setToggle(false);
        })
    }

    function removeModal(){
        props.setShow(true);
    }

    return(


        <>
            <header className="flex" onClick={abc}>
                <h1> onlineShopping </h1>

                <div className="toggle-button"  >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

        { toggle &&
            <div className="navbar-links flex-navbar-links">
                {/* <h1 className="Signin"> SignIn </h1> */}
                {/* <h1 className="SignUp"> SignUp </h1> */}
                <h1 className="Cart" onClick={removeModal}>
                    Cart
                </h1>
            </div>

        }
            </header>
        </>
    )
}