import React from 'react';

import { Container } from '@ui-kit';

import { BrandStatistics } from './features/BrandStatistics';
import { HeroHeader } from './features/HeroHeader';

export const HomePageScreen = () => (
  <Container>
    <HeroHeader />
    <BrandStatistics />
  </Container>
);
