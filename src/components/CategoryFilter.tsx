// components/CategoryFilter.tsx
import { Box, Flex, Image, Text, useBreakpoint } from '@chakra-ui/react';
import { useState } from 'react';

interface CategoryFilterProps {
    onCategorySelect: (category: string | null) => void;
}

export const CategoryFilter = ({ onCategorySelect }: CategoryFilterProps) => {
    const breakpoint = useBreakpoint();
    const [openedCategory, setOpenedCategory] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const categories = [
        { icon: 'salads.svg', label: 'Салаты' },
        { icon: 'Appetizers.svg', label: 'Закуски' },
        { icon: 'first_courses.svg', label: 'Первые блюда' },
        { icon: 'second_courses.svg', label: 'Вторые блюда' },
        { icon: 'deserts_pastries.svg', label: 'Десерты, выпечка' },
        { icon: 'grilled_dishes.svg', label: 'Блюда на гриле' },
        { icon: 'vega_cuisine.svg', label: 'Веганская кухня' },
        { icon: 'childrens_meals.svg', label: 'Детские блюда' },
        { icon: 'therapeutic_food.svg', label: 'Лечебное питание' },
        { icon: 'nationals.svg', label: 'Национальные' },
        { icon: 'sauses.svg', label: 'Соусы' },
        { icon: 'beverages.svg', label: 'Напитки' },
        { icon: 'preparetions.svg', label: 'Заготовки' },
    ];

    const veganSubcategories = [
        'Закуски',
        'Первые блюда',
        'Вторые блюда',
        'Гарниры',
        'Десерты',
        'Выпечка',
        'Сыроедческие блюда',
        'Напитки',
    ];

    const handleCategoryClick = (label: string) => {
        const newOpenedCategory = openedCategory === label ? null : label;

        setOpenedCategory(newOpenedCategory);
        setSelectedCategory(newOpenedCategory);
        onCategorySelect(newOpenedCategory);
    };

    if (!['xl', '2xl'].includes(breakpoint)) return null;

    return (
        <Box
            borderRadius='12px'
            p='24px 0px 0px 0px'
            w='256px'
            h='1040px'
            bg='white'
            boxShadow='0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)'
            position='relative'
        >
            <Box position='absolute' right='0px' top='24px' bottom='0px'>
                <svg
                    width='8'
                    height='854'
                    viewBox='0 0 8 854'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <rect width='8' height='854' rx='4' fill='black' fillOpacity='0.04' />
                    <rect width='8' height='362.505' rx='4' fill='black' fillOpacity='0.16' />
                </svg>
            </Box>

            <Box pl='16px' pr='24px'>
                {categories.map((category) => (
                    <Box key={category.label} mb={2}>
                        <Box
                            p='12px 8px'
                            w='230px'
                            h='48px'
                            bg='white'
                            _hover={{ bg: '#ffffd3' }}
                            cursor='pointer'
                            onClick={() => handleCategoryClick(category.label)}
                        >
                            <Flex align='center' justify='space-between'>
                                <Flex align='center' gap='12px'>
                                    <Image
                                        src={`/img/categories/${category.icon}`}
                                        alt={category.label}
                                        w='24px'
                                        h='24px'
                                    />
                                    <Text
                                        fontFamily='var(--font-family)'
                                        fontWeight={selectedCategory === category.label ? 700 : 500}
                                        fontSize='16px'
                                        lineHeight='150%'
                                        color='#000'
                                    >
                                        {category.label}
                                    </Text>
                                </Flex>

                                <Box
                                    transform={
                                        openedCategory === category.label
                                            ? 'rotate(180deg)'
                                            : 'none'
                                    }
                                    transition='transform 0.2s'
                                >
                                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M1.64592 4.64592C1.69236 4.59935 1.74754 4.56241 1.80828 4.5372C1.86903 4.512 1.93415 4.49902 1.99992 4.49902C2.06568 4.49902 2.13081 4.512 2.19155 4.5372C2.2523 4.56241 2.30747 4.59935 2.35392 4.64592L7.99992 10.2929L13.6459 4.64592C13.6924 4.59943 13.7476 4.56255 13.8083 4.53739C13.8691 4.51223 13.9342 4.49929 13.9999 4.49929C14.0657 4.49929 14.1308 4.51223 14.1915 4.53739C14.2522 4.56255 14.3074 4.59943 14.3539 4.64592C14.4004 4.6924 14.4373 4.74759 14.4624 4.80833C14.4876 4.86907 14.5005 4.93417 14.5005 4.99992C14.5005 5.06566 14.4876 5.13076 14.4624 5.1915C14.4373 5.25224 14.4004 5.30743 14.3539 5.35392L8.35392 11.3539C8.30747 11.4005 8.2523 11.4374 8.19155 11.4626C8.1308 11.4878 8.06568 11.5008 7.99992 11.5008C7.93415 11.5008 7.86903 11.4878 7.80828 11.4626C7.74754 11.4374 7.69236 11.4005 7.64592 11.3539/L1.64592 5.35392C1.59935 5.30747 1.56241 5.2523 1.5372 5.19155C1.512 5.13081 1.49902 5.06568 1.49902 4.99992C1.49902 4.93415 1.512 4.86903 1.5372 4.80828C1.56241 4.74754 1.59935 4.69236 1.64592 4.64592Z'
                                            fill='black'
                                        />
                                    </svg>
                                </Box>
                            </Flex>
                        </Box>

                        {category.label === 'Веганская кухня' &&
                            openedCategory === category.label && (
                                <Box
                                    w='230px'
                                    mt={2}
                                    bg='white'
                                    borderRadius='8px'
                                    boxShadow='0 2px 8px rgba(0, 0, 0, 0.1)'
                                >
                                    {veganSubcategories.map((sub) => (
                                        <Flex
                                            key={sub}
                                            p='6px 8px 6px 52px'
                                            h='36px'
                                            align='center'
                                            position='relative'
                                            _hover={{
                                                '&::before': { bg: '#c4ff61' },
                                                fontWeight: 700,
                                            }}
                                            onMouseEnter={() => setSelectedCategory(sub)}
                                            onMouseLeave={() => setSelectedCategory(null)}
                                            cursor='pointer'
                                        >
                                            <Box
                                                position='absolute'
                                                left='32px'
                                                w='1px'
                                                h='24px'
                                                bg={
                                                    selectedCategory === sub
                                                        ? '#c4ff61'
                                                        : 'transparent'
                                                }
                                            />
                                            <Text
                                                fontFamily='var(--font-family)'
                                                fontWeight={selectedCategory === sub ? 700 : 500}
                                                fontSize='16px'
                                                lineHeight='150%'
                                                color='#000'
                                            >
                                                {sub}
                                            </Text>
                                        </Flex>
                                    ))}
                                </Box>
                            )}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};
