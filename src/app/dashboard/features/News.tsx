import React from 'react';

import { ListItemText } from '@mui/material';
import format from 'date-fns/format';
import { useSelector } from 'react-redux';

import { selectHealthAndSafetyNews } from '@entities/health-and-safety-news/store/selectors/getHealthAndSafetyNews.selector';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  List,
  ListItem,
  NewsIcon,
  Stack,
  Typography,
} from '@ui-kit';

export const News = () => {
  const news = useSelector(selectHealthAndSafetyNews);

  return (
    <Card>
      <CardHeader
        title={
          <Stack direction="row" alignItems="center" spacing={1}>
            <NewsIcon fontSize="large" />
            <Typography variant="h5">Point santé et sécurité au travail</Typography>
          </Stack>
        }
      />
      <CardContent>
        <Box>
          <Stack
            direction="column"
            divider={<Divider orientation="horizontal" flexItem />}>
            {news.slice(0, 3).map(newsItem => (
              <List key={newsItem.title}>
                <ListItem>
                  <a
                    href={newsItem.link}
                    style={{ textDecoration: 'none', color: 'black' }}
                    target="_blank"
                    rel="noreferrer">
                    <ListItemText>
                      <Stack direction="column">
                        <Stack direction="row">
                          <Typography variant="subtitle1" color="primary">
                            {newsItem.title}
                          </Typography>
                          <Chip
                            label={format(new Date(newsItem.pubDate), 'dd MMM yyyy')}
                            variant="outlined"
                          />
                        </Stack>
                        <Typography variant="body2" noWrap>
                          {newsItem.description}
                        </Typography>
                      </Stack>
                    </ListItemText>
                  </a>
                </ListItem>
              </List>
            ))}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};
