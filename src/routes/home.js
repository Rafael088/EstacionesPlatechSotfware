import Estado from '../components/Estado.js';
import Fallos from '../components/Fallos.js';
import Analitica from '../components/Analitica'
import Welcome from '../components/Welcome.js';

import { 
    FcElectronics,
    FcFlashOn,
    FcTreeStructure } 
    from "react-icons/fc";

const HomeRoutes = {
    ruta:"/home",
    subRutas:[
        {
            name     :"",
            component: <Welcome/>
        },
        {
            name      : "/Estados",
            component : <Estado/>,
            icon      : <FcElectronics size = {'3em'}/> 
        },
        {
            name      : "/Fallos",
            component : <Fallos/>,
            icon      : <FcFlashOn size = {'3em'}/> 
        },
        {
            name      : "/Analitica",
            component : <Analitica/>,
            icon      : <FcTreeStructure size = {'3em'}/>
        }
    ]
}

export default HomeRoutes