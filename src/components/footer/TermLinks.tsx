import React from 'react';
import MUILink from '../common/MUILink';
import { Box } from '@mui/material';

function TermLinks({ className }: { className?: string }) {
  return (
    <Box display="flex" flexDirection={'row'} sx={{ fontSize: 12 }} gap={2}>
      <MUILink href="/policy/finance" className={className}>
        전자금융 거래약관
      </MUILink>
      <MUILink href="/policy/online-loan" className={className}>
        온라인 연계 대출약관
      </MUILink>
      <MUILink href="/policy/online-investment" className={className}>
        온라인 연계 투자약관
      </MUILink>
      <MUILink href="/policy/privacy" className={className}>
        <b>개인정보 처리방침</b>
      </MUILink>
      <MUILink href="/policy/credit-use" className={className}>
        신용정보 활용체제
      </MUILink>
      <MUILink href="/policy/rights-of-customer">고객권리 안내문</MUILink>
    </Box>
  );
}

export default TermLinks;
