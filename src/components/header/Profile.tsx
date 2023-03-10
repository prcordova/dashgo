import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}
export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Pedro Ricardo</Text>
          <Text color="gray.300" fontSize="small">
            pedroricardocordova@yahoo.com.br
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Pedro RIcardo"
        src="https://github.com/prcordova.png"
      />
    </Flex>
  );
}
