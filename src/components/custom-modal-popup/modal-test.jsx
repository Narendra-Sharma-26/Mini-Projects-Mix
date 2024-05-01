import { useState } from "react"
import Modal from "./modal";
import './modal.css';


export default function ModalTest() {

    const [showModalPopup, setshowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        setshowModalPopup(!showModalPopup)
    }

    function onClose(){
        setshowModalPopup(false)
    }

    return <div>
        <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
        {
            showModalPopup && <Modal onClose={onClose} body={<div>Customized Body</div>} />
        }
    </div>
}