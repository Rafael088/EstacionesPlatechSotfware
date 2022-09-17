
import Cards from './chirldrens/cards';
import { FcCollect, FcScatterPlot, FcLineChart } from "react-icons/fc";
function CardEPE() {
    return ( 
        <>
            <Cards titulo="Efectividad" text="60%" datos="El Ultimo Mes" color='contCard one'>
                <FcLineChart className='iconBand'/>
            </Cards>
            <Cards titulo="Precision" text="70%" datos="El Ultimo Mes" color='contCard two'>
                <FcCollect className='iconBand'/>
            </Cards>
            <Cards titulo="Exactitud" text="80%" datos="El Ultimo Mes" color='contCard three'>
                <FcScatterPlot className='iconBand'/>
            </Cards>
        </>
     );
}

export default CardEPE;