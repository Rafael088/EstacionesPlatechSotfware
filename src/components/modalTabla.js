import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function ModalTable(props) {
    return ( 
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Etiquetar Fallos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className='formTabla'>
                <p>Casua del Fallo</p>
                <select name="causaFallo" id="causa-select">
                    <option value="">Fuertes Vientos</option>
                    <option value="FA">Tormenta</option>
                    <option value="NOTFA">Tormenta Electrica</option>
                    <option value="NOTFA">Luvia</option>
                </select>
                <p>Tipo de Fallo</p>
                <select name="tipoFallo" id="tipo-select">
                    <option value="">...</option>
                    <option value="FA">Fallo Atmosferico</option>
                    <option value="NOTFA">Fallo No Atmosferico</option>
                </select>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
     );
}

export default ModalTable;