import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import Button from '../../styledComponents/Button'

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null
	return ReactDOM.createPortal(
		<div className={'modal-overlay'}>
			<div className={'modal'}>
				{children}
				<Button onClick={onClose} $primary>Back</Button>
			</div>
		</div>,
		document.getElementById('modal-root')
	)
}
export default Modal