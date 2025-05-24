// components/RecipeCard.tsx
import { Box, Image, Text, Flex, Button, useBreakpointValue } from '@chakra-ui/react';

type RecipeCardProps = {
    image: string;
    title: string;
    description: string;
};

const SaveIcon = () => (
    <svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M5.99985 3.3075C7.0401 2.23875 9.64035 4.11 5.99985 6.51525C2.35935 4.11 4.9596 2.2395 5.99985 3.309V3.3075Z'
            fill='black'
        />
        <path
            d='M1.5 1.5C1.5 1.10218 1.65804 0.720644 1.93934 0.43934C2.22064 0.158035 2.60218 0 3 0L9 0C9.39782 0 9.77936 0.158035 10.0607 0.43934C10.342 0.720644 10.5 1.10218 10.5 1.5V11.625C10.5 11.6928 10.4815 11.7594 10.4467 11.8176C10.4118 11.8758 10.3618 11.9234 10.302 11.9554C10.2422 11.9874 10.1748 12.0026 10.1071 11.9994C10.0393 11.9961 9.97372 11.9746 9.91725 11.937L6 9.82575L2.08275 11.937C2.02628 11.9746 1.96067 11.9961 1.89292 11.9994C1.82516 12.0026 1.7578 11.9874 1.698 11.9554C1.6382 11.9234 1.5882 11.8758 1.55334 11.8176C1.51847 11.7594 1.50004 11.6928 1.5 11.625V1.5ZM3 0.75C2.80109 0.75 2.61032 0.829018 2.46967 0.96967C2.32902 1.11032 2.25 1.30109 2.25 1.5V10.9245L5.79225 9.063C5.8538 9.02204 5.92607 9.00019 6 9.00019C6.07393 9.00019 6.1462 9.02204 6.20775 9.063L9.75 10.9245V1.5C9.75 1.30109 9.67098 1.11032 9.53033 0.96967C9.38968 0.829018 9.19891 0.75 9 0.75H3Z'
            fill='black'
        />
    </svg>
);

export const RecipeCard = ({ image, title, description }: RecipeCardProps) => {
    const dimensions = useBreakpointValue({
        '2xl': {
            card: { w: '668px', h: '244px' },
            image: { w: '346px', h: '244px' },
            content: { w: '322px', p: '20px 24px' },
        },
        xl: {
            card: { w: '880px', h: '244px' },
            image: { w: '346px', h: '244px' },
            content: { w: '534px', p: '20px 24px' },
        },
        md: {
            card: { w: '356px', h: '128px' },
            image: { w: '158px', h: '128px' },
            content: { w: '198px', p: '8px 8px 4px 8px' },
        },
        base: {
            card: { w: '328px', h: '128px' },
            image: { w: '158px', h: '128px' },
            content: { w: '170px', p: '8px 8px 4px 8px' },
        },
    });

    const buttonStyles = useBreakpointValue({
        '2xl': {
            container: { w: '274px', h: '32px' },
            save: { w: '122px', p: '0 12px' },
            cook: { w: '87px', p: '0 12px' },
        },
        xl: {
            container: { w: '486px', h: '32px' },
            save: { w: '122px', p: '0 12px' },
            cook: { w: '87px', p: '0 12px' },
        },
        md: {
            container: { w: '182px', h: '24px' },
            save: { w: '24px', p: '0 6px' },
            cook: { w: '88px', p: '0 8px' },
        },
        base: {
            container: { w: '154px', h: '24px' },
            save: { w: '24px', p: '0 6px' },
            cook: { w: '70px', p: '0 8px' },
        },
    });

    return (
        <Flex
            border='1px solid rgba(0, 0, 0, 0.08)'
            borderRadius='8px'
            w={dimensions?.card.w}
            h={dimensions?.card.h}
            bg='white'
            overflow='hidden'
        >
            <Box w={dimensions?.image.w} h={dimensions?.image.h} flexShrink={0}>
                <Image
                    src={`/img/recipes/${image}`}
                    alt={title}
                    w='full'
                    h='full'
                    objectFit='cover'
                />
            </Box>

            <Flex
                direction='column'
                w={dimensions?.content.w}
                p={dimensions?.content.p}
                justify='space-between'
            >
                <Box>
                    <Text
                        fontFamily='var(--font-family)'
                        fontWeight='500'
                        fontSize={{
                            '2xl': '18px',
                            xl: '16px',
                            md: '14px',
                            base: '14px',
                        }}
                        lineHeight='156%'
                        color='#000'
                        noOfLines={2}
                        mb={2}
                    >
                        {title}
                    </Text>

                    <Text
                        fontFamily='var(--font-family)'
                        fontWeight='400'
                        fontSize={{
                            '2xl': '14px',
                            xl: '13px',
                            md: '12px',
                            base: '12px',
                        }}
                        lineHeight='143%'
                        color='#000'
                        noOfLines={3}
                    >
                        {description}
                    </Text>
                </Box>

                <Flex
                    gap={2}
                    mt={4}
                    w={buttonStyles?.container.w}
                    h={buttonStyles?.container.h}
                    align='center'
                >
                    <Button
                        variant='outline'
                        borderRadius='6px'
                        border='1px solid rgba(0, 0, 0, 0.48)'
                        bg='rgba(255, 255, 255, 0.06)'
                        px={buttonStyles?.save.p}
                        h='full'
                        w={buttonStyles?.save.w}
                        minW={buttonStyles?.save.w}
                        fontSize='12px'
                    >
                        {useBreakpointValue({
                            base: <SaveIcon />,
                            md: <SaveIcon />,
                            xl: 'Сохранить',
                            '2xl': 'Сохранить',
                        })}
                    </Button>

                    <Button
                        variant='solid'
                        bg='rgba(0, 0, 0, 0.92)'
                        color='white'
                        borderRadius='6px'
                        border='1px solid rgba(0, 0, 0, 0.08)'
                        px={buttonStyles?.cook.p}
                        h='full'
                        w={buttonStyles?.cook.w}
                        minW={buttonStyles?.cook.w}
                        fontSize='12px'
                    >
                        Готовить
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
};
