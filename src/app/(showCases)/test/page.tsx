'use client';
import {
  Box,
  Container,
  Grid,
  styled,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';

const CARD_MIN_HEIGHT = 300;

const DashboardCard = styled(Card)(({ theme }) => ({
  zIndex: 1,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  minHeight: CARD_MIN_HEIGHT,
}));

const TestCard = () => (
  <Card sx={{ maxWidth: 345 }}>
    <CardHeader title={'고객 평균 수익률'} slots={{ title: 'span' }} />

    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        8.9%
      </Typography>
    </CardContent>
  </Card>
);

function TestPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, p: 8, background: 'tan' }}>
      <Grid container spacing={3} sx={{ display: 'flex' }}>
        <TestCard />

        {/* <Grid>
          <DashboardCard>
            <Typography variant="h6" component="div">
              Full-width Card
            </Typography>
            <Typography variant="body2">
              This card spans the full width of the container on all screen
              sizes.
            </Typography>
          </DashboardCard>
        </Grid>

        <Grid>
          <DashboardCard>
            <Typography variant="h6" component="div">
              Card 3
            </Typography>
          </DashboardCard>
        </Grid>
        <Grid>
          <DashboardCard>
            <Typography variant="h6" component="div">
              Card 4
            </Typography>
          </DashboardCard>
        </Grid>
        <Grid>
          <DashboardCard>
            <Typography variant="h6" component="div">
              Card 5
            </Typography>
          </DashboardCard>
        </Grid> */}
      </Grid>
    </Container>
  );
}

export default TestPage;
