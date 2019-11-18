import React from "react"
import '../App.css'

const Modal = ({src, toggleModal}) => (

    <div className="modal">
        
        <img src={`${src}`} height="400px" width="400px" className="modal-content" alt="modal"/>
        <span onClick={()=>toggleModal({url:null, isShowModal: false})} className="close">&times;</span>
    
    </div>
)


export default Modal;

