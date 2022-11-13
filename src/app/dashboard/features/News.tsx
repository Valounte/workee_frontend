import React from 'react';

import { useSelector } from 'react-redux';

import { selectHealthAndSafetyNews } from '@entities/health-and-safety-news/store/selectors/getHealthAndSafetyNews.selector';
import { Stack, styled, Typography } from '@ui-kit';

const Title = styled(Typography)`
  margin-top: 28px;
  margin-left: 27px;
  margin-bottom: 15px;
`;

const StyledContainer = styled(Stack)`
  margin-left: 27px;
  margin-right: 27px;
`;

const StyledNews = styled.div`
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 12px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledNewsDescription = styled(Typography)`
  margin-top: 5px;
  margin-bottom: 9px;
`;

const StyledNewsDate = styled(Typography)`
  margin-bottom: 9px;
`;

export const News = () => {
  const news = useSelector(selectHealthAndSafetyNews);

  return (
    <div>
      <Title variant="subtitle1" fontSize={24}>
        Actualités de la santé et sécurité au travail
      </Title>
      <StyledContainer>
        {news.slice(0, 5).map(newsItem => (
          <a
            href={newsItem.link}
            style={{ textDecoration: 'none', color: 'black' }}
            target="_blank"
            rel="noreferrer">
            <StyledNews>
              <Typography variant="subtitle1" fontSize={16}>
                {newsItem.title}
              </Typography>
              <StyledNewsDescription variant="body2" fontSize={10}>
                {newsItem.description}
              </StyledNewsDescription>
              <StyledNewsDate variant="body2" fontSize={10}>
                {newsItem.pubDate}
              </StyledNewsDate>
            </StyledNews>
          </a>
        ))}
      </StyledContainer>
    </div>
  );
};
