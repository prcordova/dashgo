import { Box, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";
import { ReactNode } from "react";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}
export default function NavSection({ title, children }) {
  return (
    <Box>
      <Text fontWeight={"bold"} color="gray.400" fontSize={"small"}>
        {title}
      </Text>
      <Stack spacing="4" mt="8" alignItems="stretch">
        {children}
      </Stack>
    </Box>
  );
}
