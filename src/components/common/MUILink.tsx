import Link from 'next/link';
import { Link as MuiLink, LinkProps } from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';

// nextjs link(nav) + mui 링크(스타일) 래퍼
// https://stackoverflow.com/questions/66226576/using-the-material-ui-link-component-with-the-next-js-link-component
const MUILink = ({
  href = '',
  children,
  ...props
}: PropsWithChildren<LinkProps>) => {
  return (
    <Link href={href}>
      <MuiLink component="button" {...props}>
        {children}
      </MuiLink>
    </Link>
  );
};

export default MUILink;
