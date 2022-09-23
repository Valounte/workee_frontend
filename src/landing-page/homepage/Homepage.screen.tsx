import React from 'react';

import { Footer } from '../../common-features/footer/Footer';
import { MainHeader } from '../../common-features/header/MainHeader';
import { About } from './features/About';
import { BrandStatistics } from './features/BrandStatistics';
import { HeroHeader } from './features/HeroHeader';
import { Product } from './features/Product';

const HomePageScreen = () => (
  <>
    <MainHeader />
    <HeroHeader />
    <BrandStatistics />
    <Product />
    <About />
    <Footer />
  </>
);

export default HomePageScreen;
