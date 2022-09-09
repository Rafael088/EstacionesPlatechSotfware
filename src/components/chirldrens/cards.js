function Cards({titulo, mes, porcentaje}) {
    return ( 
        <div className='contCard'>
            <div className="cardLeft">
                <p>{titulo}</p>
                <p>{mes}</p>
            </div>
            <div className="cardRight">
                <p>{porcentaje}</p>
            </div>
              
        </div>
     );
}

export default Cards;