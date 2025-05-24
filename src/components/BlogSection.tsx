// components/BlogSection.tsx
import {
    Box,
    Flex,
    Text,
    Button,
    useBreakpoint,
    Image,
    useBreakpointValue,
} from '@chakra-ui/react';

export const BlogSection = () => {
    const breakpoint = useBreakpoint();
    const isDesktop = ['lg', 'xl', '2xl'].includes(breakpoint);

    const avatarStyles = useBreakpointValue({
        '2xl': { size: '48px', borderRadius: '9999px' },
        xl: { size: '48px', borderRadius: '9999px' },
        md: { size: '32px', borderRadius: '9999px' },
        base: { size: '32px', borderRadius: '9999px' },
    });

    const getDimensions = () => {
        switch (breakpoint) {
            case '2xl':
                return {
                    container: {
                        w: '1360px',
                        h: '304px',
                        p: '24px',
                        borderRadius: '16px',
                        margin: '40px auto',
                    },
                    card: { w: '426px', h: '184px' },
                };
            case 'xl':
                return {
                    container: {
                        w: '880px',
                        h: '264px',
                        p: '24px',
                        borderRadius: '16px',
                        margin: '40px auto',
                    },
                    card: { w: '266px', h: '160px' },
                };
            case 'md':
                return {
                    container: {
                        w: '728px',
                        h: '272px',
                        p: '12px',
                        borderRadius: '16px',
                        margin: '32px auto',
                    },
                    card: { w: '226px', h: '152px' },
                };
            default:
                return {
                    container: {
                        w: '328px',
                        h: '600px',
                        p: '12px',
                        borderRadius: '16px',
                        margin: '32px auto',
                    },
                    card: { w: '304px', h: '152px' },
                };
        }
    };

    const dimensions = getDimensions();

    const getAvatar = (item: number) => {
        switch (item) {
            case 1:
                return '/img/elena.svg';
            case 2:
                return '/img/alex.svg';
            case 3:
                return '/img/ekaterina.svg';
            default:
                return '';
        }
    };

    return (
        <Box bg='#c4ff61' {...dimensions.container}>
            {/* Шапка секции */}
            <Flex justify='space-between' align='center' mb={4}>
                <Text fontSize={{ base: 'lg', md: 'xl', xl: '2xl' }} fontWeight='bold'>
                    Кулинарные блоги
                </Text>
                {isDesktop && (
                    <Button
                        variant='ghost'
                        color='#000'
                        colorScheme='blackAlpha'
                        size={{ md: 'sm', xl: 'md' }}
                    >
                        Все авторы →
                    </Button>
                )}
            </Flex>

            {/* Карточки блогов */}
            <Flex
                direction={{ base: 'column', md: 'row' }}
                gap={{ base: 4, md: 3, xl: 4 }}
                justify='space-between'
                align={{ base: 'center', md: 'stretch' }}
            >
                {[1, 2, 3].map((item) => (
                    <Box
                        key={item}
                        bg='white'
                        border='1px solid rgba(0, 0, 0, 0.08)'
                        borderRadius='8px'
                        p={{ base: 3, md: 4 }}
                        {...dimensions.card}
                    >
                        <Flex align='center' gap={3}>
                            <Image
                                src={getAvatar(item)}
                                w={avatarStyles?.size}
                                h={avatarStyles?.size}
                                borderRadius={avatarStyles?.borderRadius}
                                alt={`Аватар ${item}`}
                            />
                            <Box>
                                <Text
                                    fontWeight='bold'
                                    fontSize={{ base: 'md', md: 'lg' }}
                                    noOfLines={1}
                                >
                                    {item === 1 && 'Елена Высоцкая'}
                                    {item === 2 && 'Alex Cook'}
                                    {item === 3 && 'Екатерина Константинопольская'}
                                </Text>
                                <Text fontSize='sm' color='gray.600' mt={1} noOfLines={1}>
                                    {item === 1 && '@elenapovar'}
                                    {item === 2 && '@funtasticooking'}
                                    {item === 3 && '@bake_and_pie'}
                                </Text>
                            </Box>
                        </Flex>
                        <Text
                            mt={{ base: 2, md: 3 }}
                            fontSize='sm'
                            noOfLines={3}
                            lineHeight='short'
                        >
                            Как раз после праздников, когда мясные продукты еще остались, но никто
                            их уже не хочет, время варить...
                        </Text>
                    </Box>
                ))}
            </Flex>

            {/* Кнопка для мобилок и планшетов */}
            {!isDesktop && (
                <Flex justify='center' mt={{ base: 4, md: 6 }}>
                    <Button
                        variant='ghost'
                        color='#000'
                        colorScheme='blackAlpha'
                        size='sm'
                        width={{ md: '200px' }}
                    >
                        Все авторы →
                    </Button>
                </Flex>
            )}
        </Box>
    );
};
