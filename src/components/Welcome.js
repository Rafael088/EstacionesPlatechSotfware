
import '../css/welcome.css';
import Cards from './chirldrens/cards';
import Media from './chirldrens/Media';
import HeadComps from './HeadComps';

function Welcome() {
    return ( 
        <div className="contWelcome">
            <HeadComps titulo="Bienvenidos" focus="PLATECH" text=" Te desea la mejor experiencia utilizando nuestros servicios" />
            <div className='contWelBody'>
               <Media/>
            </div>
            <div className='contWelFooter'>
                <p>@Platech-chec-version0.1 08/09/2022</p>
            </div>
        </div>
     );
}

export default Welcome;