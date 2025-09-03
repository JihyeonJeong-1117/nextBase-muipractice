import { Typography, TypographyProps } from '@Mui/material';

const CopyrightTypography = ({
  text: { year, companyName },
  props,
}: {
  text: { year: string; companyName: string };
  props: TypographyProps;
}) => {
  return (
    <Typography {...props}>
      © {year} {companyName}. All rights reserved.
    </Typography>
  );
};

export default CopyrightTypography;
