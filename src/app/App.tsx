// App.tsx
import { Box, Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { CategoryFilter } from '../components/CategoryFilter';
import { RecipeGrid } from '../components/RecipeGrid';
import { ActionFooter } from '../components/ActionFooter';
import { BlogSection } from '../components/BlogSection';
import { useState } from 'react';

export default function App() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    return (
        <Box>
            <Header />

            <Flex direction={{ base: 'column', lg: 'row' }} p={4} gap={8}>
                <Box flexShrink={0} w={{ lg: '300px' }}>
                    <CategoryFilter onCategorySelect={setSelectedCategory} />
                </Box>

                <Box flex={1}>
                    <HeroSection selectedCategory={selectedCategory} />
                    <RecipeGrid />
                    <BlogSection />
                </Box>
            </Flex>

            <ActionFooter />
        </Box>
    );
}
