import { Box } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

// Next/Image MUI 래퍼
// https://stackoverflow.com/questions/71196471/how-to-use-next-js-image-component-with-materialui
const MUIImage = ({
  src,
  alt = '',
  width = 50,
  height = 50,
}: {
  src: StaticImageData;
  alt: string;
  width?: number;
  height?: number | string;
}) => {
  return (
    <Box sx={{ position: 'relative', width, height }}>
      <Image src={src} alt={alt} />
    </Box>
  );
};

export default MUIImage;
