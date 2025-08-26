import { Box, Button, Typography } from '@mui/material';

const Catchphrase = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={4} sx={{ pt: 15 }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: {
            xs: '1.5rem',
            sm: '2rem',
            md: '3rem',
          },
        }}
      >
        새로운 금융투자의 중심,
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: {
            xs: '1.5rem',
            sm: '2rem',
            md: '3rem',
          },
        }}
      >
        하이펀딩 서비스
      </Typography>
      <Button type="button" variant="contained" sx={{ px: 8, maxWidth: 300 }}>
        투자 신청하기
      </Button>
    </Box>
  );
};

export default Catchphrase;
