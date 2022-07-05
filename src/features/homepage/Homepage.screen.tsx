import React from 'react';

import { Container } from '@ui-kit';

import { About } from './features/About';
import { BrandStatistics } from './features/BrandStatistics';
import { HeroHeader } from './features/HeroHeader';
import { Product } from './features/Product';

export const HomePageScreen = () => (
  <Container maxWidth="md">
    <HeroHeader />
    <BrandStatistics />
    <About />
    <Product />
  </Container>
);
