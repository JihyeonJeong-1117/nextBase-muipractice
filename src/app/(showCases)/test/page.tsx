'use client';
import {
  Container,
  Grid,
  Typography,
  LinearProgress,
  Box,
  Card,
} from '@mui/material';
import {
  LineChart,
  Line,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Bar,
} from 'recharts';
import Catchphrase from './components/Catchphrase';
import { barData, lineData } from './constants';
import FlexibleCard from './components/FlexibleCard';
import ButtonWithIcon from './components/ButtonWithIcon';
import Carousel from './components/Carousel';
import Image from 'next/image';
import TitleWithIcon from './components/TitleWidthIcon';
import SimulationForm from './components/SimulationForm';
import CustomEditor from './components/CustomEditor';
import ClientSideCustomEditor from './components/ClientSideCustomEditor';
import Footer from '@/components/footer';

function TestPage() {
  return (
    <>
      <div className="h-auto w-[100vw]">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            gap: 24,
          }}
        >
          <div
            style={{
              backgroundImage: 'url(./background.webp)',
              backgroundSize: 'cover',
              color: 'white',
            }}
          >
            <Container
              sx={{ display: 'flex', flexDirection: 'column', gap: 8, pb: 4 }}
            >
              <Catchphrase />
              <Grid
                id="overlay-end"
                container
                spacing={3}
                sx={{
                  display: 'flex',
                  justifyContent: 'stretch',
                }}
              >
                <Box
                  sx={{ flexBasis: { md: '60%', xs: '100%' } }}
                  display={'flex'}
                  flexDirection={'column'}
                  gap={2}
                >
                  <Box
                    display={'flex'}
                    gap={3}
                    sx={{
                      flexDirection: {
                        xs: 'column',
                        md: 'row',
                      },
                      gap: {
                        xs: 2,
                        md: 4,
                      },
                    }}
                  >
                    <FlexibleCard
                      title={'투자 자산'}
                      value={'3,625,252'}
                      moneyType={'원'}
                      isLoadingNeeded={true}
                    >
                      <LineChart width={300} height={150} data={lineData}>
                        <Line dataKey="uv" />
                      </LineChart>
                    </FlexibleCard>
                    <FlexibleCard
                      title={'순수익'}
                      value={'825,252'}
                      moneyType={'원'}
                      isLoadingNeeded={true}
                    >
                      <BarChart width={300} height={150} data={barData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                      </BarChart>
                    </FlexibleCard>
                  </Box>
                  <Box sx={{ height: 100, width: '100%' }}>
                    <FlexibleCard title={'누적 대출금액'}></FlexibleCard>
                  </Box>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <FlexibleCard title={'로그인'} />
                </Box>
              </Grid>
            </Container>
          </div>
          <div className="bg-[#dae2ea]">
            <Container
              sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}
            >
              <Box
                display={'flex'}
                gap={{
                  xs: 4,
                  md: 16,
                }}
                sx={{
                  flexDirection: {
                    xs: 'column',
                    md: 'row',
                  },
                }}
              >
                <Box>
                  <TitleWithIcon>즐겨찾기 메뉴</TitleWithIcon>

                  <Grid container>
                    <Grid container size={{ xs: 2, md: 4 }}>
                      <ButtonWithIcon />
                    </Grid>
                    <Grid container size={{ xs: 2, md: 4 }}>
                      <ButtonWithIcon />
                    </Grid>
                    <Grid container size={{ xs: 2, md: 4 }}>
                      <ButtonWithIcon />
                    </Grid>
                    <Grid container size={{ xs: 2, md: 4 }}>
                      <ButtonWithIcon />
                    </Grid>
                    <Grid container size={{ xs: 2, md: 4 }}>
                      <ButtonWithIcon />
                    </Grid>
                    <Grid container size={{ xs: 2, md: 4 }}>
                      <ButtonWithIcon />
                    </Grid>
                  </Grid>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                  <TitleWithIcon>진행중인 이벤트</TitleWithIcon>
                  <Carousel />
                </Box>
              </Box>

              <Box display="flex" flexDirection={'column'} gap={4}>
                <TitleWithIcon>하이펀딩 투자 알아보기</TitleWithIcon>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: {
                      xs: 'column',
                      md: 'row',
                    },
                  }}
                  gap={4}
                >
                  <Box sx={{ background: '#ff8b16' }} flexGrow={1}>
                    하이펀딩 투자 방식
                    <Image
                      src="/invest.png"
                      alt="투자 방식"
                      width={600}
                      height={300}
                    />
                  </Box>
                  <Box sx={{ background: '#39b76b', minHeight: 100 }}>
                    스탁론 뭐가 다른가요?
                  </Box>
                  <Box sx={{ background: '#ff8b16', minHeight: 100 }}>
                    안전한 투자 비결은?
                  </Box>
                </Box>
              </Box>
              <Box display="flex" flexDirection={'column'} gap={4}>
                <TitleWithIcon>투자 시뮬레이션</TitleWithIcon>
                <SimulationForm />
              </Box>
              <Box>
                <FlexibleCard>
                  <ClientSideCustomEditor
                    onSubmit={() => console.log('submit')}
                  />
                </FlexibleCard>
              </Box>
            </Container>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default TestPage;

{
  /* <TestCard
title={'내 예치금'}
value={'10,500,500'}
moneyType={'원'}
>
<Grid sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
  <Typography>투자가능금액 : 5,874,748원</Typography>
  <LinearProgress
    variant="determinate"
    value={77}
    sx={{ width: 300 }}
  />
  <Typography>투자가능횟수 (8 / 20)</Typography>
  <LinearProgress
    variant="determinate"
    value={42}
    sx={{ width: 300 }}
  />
</Grid>
</TestCard> */
}
