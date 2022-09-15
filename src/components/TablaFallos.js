
import '../css/tabla.css';
import ModalTable from './modalTabla';
import React, { useState } from 'react';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BsFillPinFill } from "react-icons/bs";
function TablaFallos({datos}) {
    const [modalShow, setModalShow] = useState(false);
    return ( 
        <div className="contTablaFallos">
            <div className='tableHeaderTools'>
                <p>Filtrar Por:  <select name="filtro" id="tipo-filtro">
                    <option value="Nombre">Nombre</option>
                    <option value="Fecha">Fecha</option>
                    <option value="Ubicacion">Ubicacion</option>
                </select></p>
                
            </div>
            <table className='tablaFallos'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Estado</th>
                        <th>Fecha</th>
                        <th>Ubicacion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((dato) => (
                        <tr>
                            <td>{dato.id}</td>
                            <td>{dato.name}</td>
                            <td>{dato.name}</td>
                            <td>{dato.name}</td>
                            <td className='tdBtn'>
                                <div className='iconTd' onClick={() => setModalShow(true)}>
                                    <BsFillPinFill className='iconT'/>
                                </div>
                                <div className='iconTd'>
                                    <AiFillEdit className='iconE'/>
                                </div>
                                <div className='iconTd'>
                                    <AiFillDelete className='iconR'/>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='tableFooterTools'>

            </div>
            <ModalTable
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
     );
}

export default TablaFallos;