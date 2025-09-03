import {
  Box,
  Container,
  Grid,
  styled,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MUIImage from '../common/MUIImage';
import aos from '../../../public/qrcode-aos.png';
import ios from '../../../public/qrcode-ios.png';
import Logo from '@/../public/logo-footer.svg';
import TermLinks from './TermLinks';

const DEFAULT_QR_SIZE = {
  w: 150,
  h: 150,
};

const useIsMobile = () => {
  // 기존 matchMedia minWidth 600.
  const matches = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return matches;
};

const Footer = () => {
  const test = useIsMobile();
  console.log(test);

  return (
    <StyledFooter className="footer-container">
      <Box
        py={3}
        px={2}
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={2}
      >
        <MUIImage
          src={Logo}
          alt="HighFunding logo"
          width={200}
          height={'auto'}
        />
        <TermLinks className={'right-line'} />
      </Box>
      <Box py={3} px={2}>
        <Grid container>
          <Grid item xs={5}>
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  component="h3"
                  variant="button"
                  mb={0.5}
                  className="box-title"
                >
                  (주)하이펀딩
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} className="box-body">
                대표자 : 강병삼
                <br />
                사업자번호 : 290-81-02371
                <br />
                온라인투자연계금융업 등록번호 : 2022-33
                <br />
                주소 : (06043)서울특별시 강남구 강남대로 136길 23, 3층(논현동,
                시스터빌딩)
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  component="h3"
                  variant="button"
                  mb={0.5}
                  className="box-title"
                >
                  (주)하이펀딩
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} className="box-body">
                대표자 : 강병삼
                <br />
                사업자번호 : 290-81-02371
                <br />
                온라인투자연계금융업 등록번호 : 2022-33
                <br />
                주소 : (06043)서울특별시 강남구 강남대로 136길 23, 3층(논현동,
                시스터빌딩)
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* <MUIImage src={aos} alt="qr-aos" />
        <MUIImage src={ios} alt="qr-ios" /> */}
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.grey['50'],
  '.right-line': {
    '&::after': {
      content: '""',
      display: 'inline-block',
      verticalAlign: 'middle',
      width: '1px',
      height: '0.75em',
      marginLeft: '0.5rem',
      backgroundColor: theme.palette.grey['200'],
    },
  },
}));
