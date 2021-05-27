import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { faEdit, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const ContactCard = ({ contact, onOpen, getContactId, deleteContact }) => {
  const updateHandler = (id) => {
    getContactId(id);
    onOpen();
  };

  const deleteContactHandler = (id) => {
    deleteContact(id);
  };

  return (
    <Flex
      color="white"
      justify="space-between"
      bg="purple.600"
      p="4"
      borderRadius="xl"
      boxShadow="xl"
      mb="4"
    >
      <Link to={`/contact/${contact.id}`}>
        <Flex align="center">
          <Box mr="4">
            <FontAwesomeIcon size="3x" icon={faUser} mr="4" />
          </Box>
          <Stack>
            <Text>{contact.name}</Text>
            <Text>{contact.email}</Text>
          </Stack>
        </Flex>
      </Link>

      <Flex align="center">
        <Box mr="4" onClick={() => updateHandler(contact.id)}>
          <FontAwesomeIcon size="2x" icon={faEdit} />
        </Box>
        <Box color="red.300" onClick={() => deleteContactHandler(contact.id)}>
          <FontAwesomeIcon size="2x" icon={faTrash} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default ContactCard;
