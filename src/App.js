import { Button } from "@chakra-ui/button";
import { v4 as uuidv4 } from "uuid";
import { useDisclosure } from "@chakra-ui/hooks";
import { AddIcon, Search2Icon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";

import { Heading, Flex, Box } from "@chakra-ui/layout";
import { useState } from "react";

import ContactCard from "./components/ContactCard";
import ContactForm from "./components/ContactForm";
import Kmodal from "./components/Kmodal";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();
  const [searchData, setSearchData] = useState("");
  const [contacts, setContacts] = useState([
    { name: "anshu", email: "anshu@gmail.com", id: "1" },
    { name: "anshu1", email: "anshu1@gmail.com", id: "2" },
    { name: "anshu3", email: "anshu2@gmail.com", id: "3" },
    { name: "anshu2", email: "anshu3@gmail.com", id: "4" },
    { name: "anshu4", email: "anshu4@gmail.com", id: "5" },
  ]);
  const [contactId, setContactId] = useState();
  const addNewContact = (name, email) => {
    if (
      contacts.findIndex((contact) => contact.email === email) === -1 &&
      email !== ""
    ) {
      setContacts([...contacts, { name, email, id: uuidv4() }]);
    }
  };

  let searchContacts = contacts.filter((contact) =>
    contact.name.includes(searchData)
  );

  const getContactId = (id) => {
    setContactId(id);
  };

  const updateContact = (name, email, id) => {
    setContacts((prev) => [
      ...contacts.filter((contact) => contact.id !== id),
      { name, email, id },
    ]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => [...contacts.filter((contact) => contact.id !== id)]);
  };
  let selectContact = contacts.find((contact) => contact.id === contactId);

  return (
    <>
      <Kmodal
        isOpen={isOpen}
        title={"Add New Contact"}
        onOpen={onOpen}
        onClose={onClose}
      >
        <ContactForm addNewContact={addNewContact} onClose={onClose} />
      </Kmodal>
      <Kmodal
        isOpen={isOpenEdit}
        title={"Update New Contact"}
        onOpen={onOpenEdit}
        onClose={onCloseEdit}
      >
        <ContactForm
          updateContact={updateContact}
          contact={selectContact}
          onClose={onCloseEdit}
        />
      </Kmodal>
      <Box>
        <Flex p="4" justify="center" align="center">
          <Image src="/banner.png" w="150px" h="100px" />
          <Heading as="h1" textTransform="uppercase">
            Contact App
          </Heading>
        </Flex>
        <Box p="4">
          <Button
            bg="purple.700"
            color="white"
            w="full"
            fontSize="xl"
            fontWeight="bold"
            colorScheme="purple"
            onClick={onOpen}
          >
            <AddIcon h="20px" w="20px" mr="4" /> Add Contact
          </Button>
        </Box>
        <Box p="4">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="gray.300" />}
            />
            <Input
              focusBorderColor="purple.400"
              type="tel"
              placeholder="Search Contact..."
              onChange={(e) => setSearchData(e.target.value)}
            />
          </InputGroup>
        </Box>
        <Box p="4">
          {searchContacts.map((contact) => (
            <ContactCard
              getContactId={getContactId}
              onOpen={onOpenEdit}
              contact={contact}
              key={contact.id}
              deleteContact={deleteContact}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default App;
