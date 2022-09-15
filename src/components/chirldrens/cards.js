import React from "react";

function Cards({titulo, text, datos, children}) {
    return ( 
        <div className='contCard'>
            <div className="contLeftCard">
                <h5>{titulo}</h5>
                <b>{text}</b>
                <p>{datos}</p>
                
            </div>
            <div className="contRightCard">
                {children}
            </div>
        </div>
     );
}

export default Cards;