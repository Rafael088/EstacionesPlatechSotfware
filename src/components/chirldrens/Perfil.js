import { AiFillCaretDown, AiFillAlert} from "react-icons/ai";
function Perfil() {
    return ( 
        <div className="contPerfil">
            <div className="bodyPerfil">
                <div className="contPerfilIcon1">
                    <AiFillAlert className="iconPerfil"/>
                </div>
                <div className="contIconImg">
                <div className="contImgPerfil">
                    
                    </div>
                    <div className="contPerfilIcon2">
                        <AiFillCaretDown className="iconPerfil"/>
                    </div>
                </div>
                
            </div>
        </div>
     );
}

export default Perfil;