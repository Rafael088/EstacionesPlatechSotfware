import Cards from './chirldrens/cards';
import '../css/cardInfo.css';
function CardInfo({titulo, datos, color}) {
    return ( 
        <>
            <Cards titulo={titulo} datos={datos} color={color}>
                
            </Cards>
        </>
     );
}

export default CardInfo;