import '../css/ia.css';
import Cards from './chirldrens/cards';
import HeadComps from './HeadComps';

function Ia() {
    return ( 
        <div className="contIa">
            <HeadComps titulo="Inteligencia Artificial" />
            <div className='contIaBody'>
                <Cards titulo="Semana01" />
                <Cards titulo="Semana02" />
            </div>
        </div>
     );
}

export default Ia;