import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import { useRef } from "react";

export const ModalManage = ({ isOpen, onClose }) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      size="full"
      onClose={onClose}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Gestisci ordine</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Sala</FormLabel>
            <Select ref={initialRef} placeholder="Seleziona la Sala">
              <option value="option1">Dentro</option>
              <option value="option2">Fuori</option>
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Tavolo</FormLabel>
            <Select ref={initialRef} placeholder="Seleziona il Tavolo">
              <option value="optiont1">Tavolo 1</option>
              <option value="optiont2">Tavolo 2</option>
              <option value="optiont3">Tavolo 3</option>
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
