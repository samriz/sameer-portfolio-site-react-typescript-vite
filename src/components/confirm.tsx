import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { confirmable, type ConfirmDialog, createConfirmation } from 'react-confirm';

export interface Props 
{
	okLabel?: string;
	cancelLabel?: string;
	title?: string;
	confirmationMessage?: string;
};

const Confirmation: ConfirmDialog<Props, boolean> = (props) => (
	<div className="static-modal">
		<Modal animation={false} show={props.show} onHide={() => props.proceed(false)} backdrop={true}>
			{/* <Modal.Header>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header> */}
			<Modal.Body>
				{props.confirmationMessage}
			</Modal.Body>
			{/* <Button onClick={() => props.proceed(true)}>{props.okLabel || 'OK'}</Button> */}
			<Modal.Footer style={{ borderTop: "none" }}>
				<Button onClick={() => props.proceed(true)}>{props.okLabel || 'OK'}</Button>
			</Modal.Footer>
		</Modal>
	</div>
);

export const confirm = createConfirmation(confirmable(Confirmation));