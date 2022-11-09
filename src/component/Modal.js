import React from 'react'

function Modal(props) {

    const confirmHandler = () => {
        props.onConfirm()
    }

    const cancelHandler = () => {
        props.onCancel()
    }

    return (
        <div className='modals'>
            <p>Are you sure?</p>
            <button className='btn btn-success' onClick={cancelHandler}>Cancel</button>
            <button className='btn btn-danger' onClick={confirmHandler}>Confirm</button>
        </div>
    )
}

export default Modal