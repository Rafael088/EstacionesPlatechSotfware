
import '../css/welcome.css';
import Cards from './chirldrens/cards';

function Welcome() {
    return ( 
        <div className="contWelcome">
            <div className='contWelHead'>
                <h3>Guia del software</h3>
            </div>
            <div className='contWelBody'>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        </div>
     );
}

export default Welcome;