
import Perfil from './chirldrens/Perfil';
import '../css/headComps.css';
function HeadComps({titulo, focus, text} ) {
    return ( 
        <div className='contCompsHead'>
                <Perfil/>
                <div className='bodyCompsHead'>
                    <h3>{titulo}</h3>
                    <p> <b>{focus}</b> {text}</p>        
                </div>
                <div className='headCompsDate'>
                </div>
        </div>
     );
}

export default HeadComps;