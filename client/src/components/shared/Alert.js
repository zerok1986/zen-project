import { Toast } from "react-bootstrap"

const Alert = ({ closeAlert, show, text }) => {

    return (
        <Toast autohide delay={3000} show={show} onClose={closeAlert} style={{ zIndex: 9999, position: 'fixed', bottom: 38, right: 17, width: 300 }}>
            <Toast.Body>{text}</Toast.Body>
        </Toast>
    )
}


export default Alert