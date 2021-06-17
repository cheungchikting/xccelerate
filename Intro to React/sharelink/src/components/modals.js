import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Form} from 'reactstrap';

const ModalButton = (props) => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [link, setLink] = useState("");

  function handleChange(event) {
    setLink(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.getlink(
      {url: link}
    );
    toggle();
  }

  return (
    <div>
      <Button color="success" onClick={toggle}>{props.buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Enter the new link</ModalHeader>
          <Form id="myform" onSubmit={handleSubmit}>
        <ModalBody>
          <FormGroup>
            <Label for="exampleUrl">Link</Label>
            <Input
              type="url"
              name="url"
              placeholder="url"
              form="myform"
              onChange={handleChange}
              value={link}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit">Post</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
}

// export default linkList;
export {ModalButton};