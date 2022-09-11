function Cards({titulo, text, datos}) {
    return ( 
        <div className='contCard'>
            <h5>{titulo}</h5>
            <p>{text}</p>
            <p>{datos}</p>  
        </div>
     );
}

export default Cards;