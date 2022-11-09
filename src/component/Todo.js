import { useState } from 'react'
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const deleteHandler = () => {
        setModalIsOpen(true)
    }

    const closeModalHandler = () => {
        setModalIsOpen(false)
    }

    return (
        <>
            <div className='card mb-3'>
                <h3>{props.title}</h3>
                <div className='actions'>
                    <button className='btn btn-danger' onClick={deleteHandler}>Delete</button>
                </div>
            </div>
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
        </>
    )
}

export default Todo