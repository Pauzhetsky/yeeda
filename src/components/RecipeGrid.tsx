// components/RecipeGrid.tsx
import {
    Box,
    Heading,
    Flex,
    IconButton,
    useBreakpointValue,
    Button,
    SimpleGrid,
} from '@chakra-ui/react';
import { RecipeCard } from './RecipeCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useRef } from 'react';

export const RecipeGrid = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const containerDimensions = useBreakpointValue({
        '2xl': { w: '1360px', h: '486px' },
        xl: { w: '880px', h: '466px' },
        md: { w: '728px', h: '264px' },
        base: { w: '328px', h: '264px' },
    });

    const gridSettings = useBreakpointValue({
        '2xl': {
            container: { w: '1360px', h: '584px' },
            columns: 2,
            spacing: 6,
        },
        xl: {
            container: { w: '880px', h: '1080px' },
            columns: 1,
            spacing: 4,
        },
        md: {
            container: { w: '728px', h: '368px' },
            columns: 2,
            spacing: 4,
        },
        base: {
            container: {
                w: '100%',
                h: '644px',
                maxW: '328px',
                px: 4,
            },
            columns: 1,
            spacing: 4,
        },
    });

    const handleScroll = (direction: 'left' | 'right') => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollAmount = direction === 'right' ? 400 : -400;
        container.scrollTo({
            left: container.scrollLeft + scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <Box>
            {/* Новые рецепты - карусель */}
            <Box w={containerDimensions?.w} h={containerDimensions?.h} mx='auto' mb={12}>
                <Flex justify='space-between' align='center' mb={6}>
                    <Heading as='h2' size='lg'>
                        Новые рецепты
                    </Heading>
                    <Flex gap={2}>
                        <IconButton
                            aria-label='Scroll left'
                            icon={<ChevronLeftIcon />}
                            onClick={() => handleScroll('left')}
                            size='sm'
                        />
                        <IconButton
                            aria-label='Scroll right'
                            icon={<ChevronRightIcon />}
                            onClick={() => handleScroll('right')}
                            size='sm'
                        />
                    </Flex>
                </Flex>

                <Flex
                    ref={scrollRef}
                    overflowX='auto'
                    gap={useBreakpointValue({
                        '2xl': 6,
                        xl: 4,
                        md: 2,
                        base: 2,
                    })}
                    pb={4}
                    sx={{
                        '&::-webkit-scrollbar': { display: 'none' },
                        scrollbarWidth: 'none',
                    }}
                >
                    {[
                        {
                            id: 1,
                            image: 'solyanka_with_mashrooms.png',
                            title: 'Солянка с грибами',
                            description:
                                'Как раз после праздников, когда мясные продукты еще остались...',
                        },
                        {
                            id: 2,
                            image: 'cabbage_patties.png',
                            title: 'Капустные котлеты',
                            description: 'Нежные и пышные котлеты из капусты...',
                        },
                        {
                            id: 3,
                            image: 'kefir_fritters.png',
                            title: 'Оладьи на кефире',
                            description: 'Пышные оладушки для идеального завтрака...',
                        },
                        {
                            id: 4,
                            image: 'health-salad.png',
                            title: 'Салат "Здоровье"',
                            description: 'Витаминный салат с сельдереем и свежими овощами...',
                        },
                    ].map((recipe) => (
                        <RecipeCard key={recipe.id} {...recipe} />
                    ))}
                </Flex>
            </Box>

            {/* Самое сочное */}
            <Box
                {...gridSettings?.container}
                mx='auto'
                position='relative'
                mb={useBreakpointValue({ base: '32px', md: '0' })}
            >
                <Flex
                    justify='space-between'
                    align='center'
                    mb={6}
                    direction={{ base: 'column', md: 'row' }}
                    gap={{ base: 4, md: 0 }}
                >
                    <Heading as='h2' size='lg'>
                        Самое сочное
                    </Heading>

                    <Box display={{ base: 'none', md: 'block' }}>
                        <Button
                            variant='solid'
                            bg='#b1ff2e'
                            borderRadius='6px'
                            fontFamily='var(--font-family)'
                            fontWeight='600'
                            color='#000'
                            _hover={{ bg: '#9de326' }}
                            _active={{ bg: '#8acb20' }}
                            {...useBreakpointValue({
                                '2xl': { w: '197px', h: '48px', fontSize: '18px' },
                                xl: { w: '167px', h: '40px', fontSize: '16px' },
                            })}
                        >
                            Вся подборка →
                        </Button>
                    </Box>
                </Flex>

                <SimpleGrid
                    columns={gridSettings?.columns}
                    spacing={gridSettings?.spacing}
                    mt={{ base: '12px', md: '0' }}
                >
                    {[
                        {
                            id: 5,
                            image: 'spaghetti_dumblings.png',
                            title: 'Кнели со спагетти',
                            description:
                                'Идеальное сочетание нежных кнелей и аль денте спагетти...',
                        },
                        {
                            id: 6,
                            image: 'spicy_ham.png',
                            title: 'Пряная ветчина по-итальянски',
                            description: 'Ароматная ветчина с прованскими травами...',
                        },
                        {
                            id: 7,
                            image: 'chicken_noodles.png',
                            title: 'Лапша с курицей и шафраном',
                            description: 'Азиатские мотивы в нежном курином блюде...',
                        },
                        {
                            id: 8,
                            image: 'tom_yum.png',
                            title: 'Том-ям с капустой кимчи',
                            description: 'Остро-кислый суп с хрустящей кимчи...',
                        },
                    ].map((recipe) => (
                        <RecipeCard key={recipe.id} {...recipe} />
                    ))}
                </SimpleGrid>

                <Flex display={{ base: 'flex', md: 'none' }} justify='center' mt={4} w='100%'>
                    <Button
                        variant='solid'
                        bg='#b1ff2e'
                        borderRadius='6px'
                        w='100%'
                        maxW='296px'
                        h='40px'
                        fontFamily='var(--font-family)'
                        fontWeight='600'
                        fontSize='16px'
                        lineHeight='150%'
                        color='#000'
                        _hover={{ bg: '#9de326' }}
                        _active={{ bg: '#8acb20' }}
                    >
                        Вся подборка →
                    </Button>
                </Flex>
            </Box>
        </Box>
    );
};
