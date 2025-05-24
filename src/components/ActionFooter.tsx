// components/ActionFooter.tsx
import { Flex, Button } from '@chakra-ui/react';

export const ActionFooter = () => (
    <Flex
        justify='space-between'
        p={4}
        borderTopWidth='1px'
        position='sticky'
        bottom={0}
        bg='white'
    >
        <Button variant='ghost'>Главная</Button>
        <Button variant='ghost'>Поиск</Button>
        <Button colorScheme='green'>Записать рецепт</Button>
    </Flex>
);
