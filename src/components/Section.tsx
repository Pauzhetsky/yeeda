// components/Section/Section.tsx
import { Box, Heading } from '@chakra-ui/react';

type SectionProps = {
    title: string;
    children: React.ReactNode;
};

export const Section = ({ title, children }: SectionProps) => (
    <Box mb={8}>
        <Heading as='h2' size='lg' mb={4}>
            {title}
        </Heading>
        {children}
    </Box>
);
