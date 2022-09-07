import React from "react";
import '../css/notFound.css';
import { AiOutlineFileExcel} from "react-icons/ai";
import { HiPaperAirplane} from "react-icons/hi";
const Errores = () => {
    return <div className="contNotFound">
        <div className="figure1">
            
        </div>
        <div className="figure2">
            
        </div>
        <HiPaperAirplane className="figure3"/>
        
        <div className="cardNotFound">
            <h1>4<AiOutlineFileExcel className="iconFound"/>4</h1>
            <p>Pagina no Encontrada</p>
        </div>
    </div>
}

export default Errores