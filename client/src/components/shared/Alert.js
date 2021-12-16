import { Toast } from "react-bootstrap"

const Alert = ({ closeAlert, show, text }) => {

    return (
        <Toast autohide delay={3000} show={show} onClose={closeAlert} style={{ fontStyle:"Poppins", zIndex: 9999, position: 'fixed', bottom: 15, right: 15, width: 280, border: '1px solid #171717', borderRadius: 0, textAlign:'center' }}>
            <Toast.Body>{text}</Toast.Body>
        </Toast>
    )
}


export default Alert