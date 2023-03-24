import React from 'react';

import { ListItemText } from '@mui/material';
import format from 'date-fns/format';
import { useSelector } from 'react-redux';

import { selectHealthAndSafetyNews } from '@entities/health-and-safety-news/store/selectors/getHealthAndSafetyNews.selector';
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
  styled,
} from '@ui-kit';

const StyledCardContent = styled(CardContent)`
  padding-top: 0;
`;

const StyledListItem = styled(ListItem)`
  padding: 16px 0;
`;

export const News = () => {
  const news = useSelector(selectHealthAndSafetyNews);

  return (
    <Card>
      <CardHeader
        title={
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="h5">Point santé et sécurité au travail</Typography>
          </Stack>
        }
      />
      <StyledCardContent>
        <Stack
          direction="column"
          divider={<Divider orientation="horizontal" flexItem />}>
          {news.slice(0, 5).map(newsItem => (
            <List key={newsItem.title} disablePadding>
              <StyledListItem disablePadding>
                <a
                  href={newsItem.link}
                  style={{ textDecoration: 'none', color: 'black', width: '100%' }}
                  target="_blank"
                  rel="noreferrer">
                  <ListItemText>
                    <Stack direction="column">
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="subtitle1">{newsItem.title}</Typography>
                        <Chip
                          label={format(new Date(newsItem.pubDate), 'dd MMM yyyy')}
                          size="small"
                          color="secondary"
                          variant="outlined"
                        />
                      </Stack>
                    </Stack>
                  </ListItemText>
                </a>
              </StyledListItem>
            </List>
          ))}
        </Stack>
      </StyledCardContent>
    </Card>
  );
};
