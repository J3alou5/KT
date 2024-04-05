const Modal = (props) => {
    return ( 
        <dialog className="modal">
            {props.children}
        </dialog>
        
    )
}

export default Modal