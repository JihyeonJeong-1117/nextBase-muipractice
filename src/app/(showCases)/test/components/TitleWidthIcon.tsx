import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const TitleWithIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box display={'flex'}>
      <Image
        src={'/exclamation.png'}
        width={50}
        height={50}
        alt="exclamationmark"
      />
      <Typography variant="h3">{children}</Typography>
    </Box>
  );
};

export default TitleWithIcon;
