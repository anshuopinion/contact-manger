import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getContactById } from "./network";
const Contact = () => {
  const [contact, setContact] = useState();

  const params = useParams();

  useEffect(() => {
    const fetchContact = async () => {
      const data = await getContactById(params.id);
      setContact(data);
    };
    fetchContact();
  }, []);

  console.log(contact);
  return (
    <>
      {contact && (
        <Flex
          m="4"
          color="white"
          justify="space-between"
          bg="purple.600"
          p="4"
          height="200px"
          borderRadius="xl"
          boxShadow="xl"
          mb="4"
        >
          <Flex align="center">
            <Box mr="4">
              <FontAwesomeIcon size="3x" icon={faUser} mr="4" />
            </Box>
            <Stack>
              <Text>{contact.name}</Text>
              <Text>{contact.email}</Text>
            </Stack>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default Contact;
