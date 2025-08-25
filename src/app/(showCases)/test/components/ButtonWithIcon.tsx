import { Box, Button } from '@mui/material';
import Image from 'next/image';

const ButtonWithIcon = ({ src = '/icon.png', title = '출금요청' }) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Image src={src} alt="icon" width={66} height={66} />
      <Button>{title}</Button>
    </Box>
  );
};

export default ButtonWithIcon;
