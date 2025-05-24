// components/Header/Header.tsx
import { Flex, Image, Box, Text, Avatar, useBreakpoint } from '@chakra-ui/react';

export const Header = () => {
    const breakpoint = useBreakpoint();
    const isMobile = ['base', 'sm'].includes(breakpoint);
    const isTablet = breakpoint === 'md';
    const isDesktop = ['lg', 'xl', '2xl'].includes(breakpoint);
    const is1440 = breakpoint === 'xl';
    const is1920 = breakpoint === '2xl';

    return (
        <Flex
            as='header'
            justifyContent='space-between'
            alignItems='center'
            px={{ base: 4, md: 6 }}
            py={2}
            bg='#ffffd3'
            boxShadow='sm'
            position='relative'
            minH={{ base: '64px', md: '80px' }}
        >
            {/* Левый блок: Логотип + Главная */}
            <Flex alignItems='center'>
                <Image
                    src={`/img/${isMobile ? 'logo.svg' : 'logo_yeedaa.svg'}`}
                    alt='Yeedaa Logo'
                    w={{
                        base: '32px',
                        md: '203px',
                        lg: '136px',
                    }}
                    h={{
                        base: '32px',
                        md: '24px',
                        lg: '32px',
                    }}
                    mr={{
                        base: '53px',
                        md: '334px',
                        xl: '128px',
                        '2xl': '128px',
                    }}
                />

                {(is1440 || is1920) && (
                    <Box
                        w={is1440 ? '672px' : '1152px'}
                        h='24px'
                        display='flex'
                        alignItems='center'
                        justifyContent='flex-start'
                    >
                        <Text
                            fontFamily='Inter, sans-serif'
                            fontWeight='500'
                            fontSize='18px'
                            lineHeight='156%'
                            color='#000'
                        >
                            Главная
                        </Text>
                    </Box>
                )}
            </Flex>

            {/* Центральные иконки для планшетов и мобильных */}
            {(isTablet || isMobile) && (
                <Flex
                    gap={{ base: 6, md: 4 }}
                    alignItems='center'
                    h='24px'
                    position={{ base: 'absolute', md: 'static' }}
                    left={{ base: '50%', md: 'unset' }}
                    transform={{ base: 'translateX(-50%)', md: 'none' }}
                >
                    {['BsBookmarkHeart.svg', 'BsPeopleFill.svg', 'BsEmojiHeartEyes.svg'].map(
                        (icon, idx) => (
                            <Flex
                                key={idx}
                                alignItems='center'
                                gap={1}
                                w={{ base: '53px', md: '56px' }}
                                h='24px'
                                p={{ md: '0px 8px' }}
                                borderRadius={{ md: '6px' }}
                                bg='transparent'
                                justifyContent='center'
                            >
                                <Image src={`/img/${icon}`} alt={icon} w='12px' h='12px' />
                                <Text
                                    fontFamily='var(--font-family)'
                                    fontWeight='600'
                                    fontSize='12px'
                                    lineHeight='133%'
                                    color='#2db100'
                                >
                                    {idx === 0 ? '185' : idx === 1 ? '589' : '587'}
                                </Text>
                            </Flex>
                        ),
                    )}
                </Flex>
            )}

            {/* Правый блок только для десктопа */}
            {isDesktop && (
                <Flex
                    alignItems='center'
                    gap={4}
                    p='0px 24px'
                    w='432px'
                    h='48px'
                    justifyContent='flex-end'
                >
                    <Avatar
                        src='/img/Avatar.svg'
                        size='48px'
                        borderRadius='9999px'
                        bg='#a0aec0'
                        border='2px solid'
                        borderColor='green.400'
                    />
                    <Box flex='1' minW='295px'>
                        <Text
                            fontWeight='600'
                            fontSize='16px'
                            lineHeight='143%'
                            color='#000'
                            fontFamily='Inter, sans-serif'
                        >
                            Екатерина Константинопольская
                        </Text>
                        <Text
                            fontSize='14px'
                            color='rgba(0, 0, 0, 0.64)'
                            lineHeight='143%'
                            fontFamily='Inter, sans-serif'
                        >
                            @bake_and_pie
                        </Text>
                    </Box>
                </Flex>
            )}

            {/* Бургер-меню для мобильных и планшетов */}
            {!isDesktop && (
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    p='0px 12px'
                    w='48px'
                    h='48px'
                    mr={{ base: '8px', md: '16px' }}
                >
                    <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z' fill='black' />
                    </svg>
                </Box>
            )}
        </Flex>
    );
};
