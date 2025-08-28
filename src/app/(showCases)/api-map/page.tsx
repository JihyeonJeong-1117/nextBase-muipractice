'use client';

import { Box, Button, Container } from '@mui/material';
import * as apis from './jsons';

export const API_ROOT = 'http://dev.hifunding.co.kr:30000/api';

const ApiPage = () => {
  const root = API_ROOT;
  const list = Object.entries(apis).filter(([k, _]) => k !== 'API_ROOT');
  return (
    <Container sx={{ pt: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {list.map(([k, v]) => {
          return (
            <Box sx={{ p: 2, borderWidth: 1 }} key={k}>
              <button type="button" onClick={() => console.log(v)}>
                <h5>{root}</h5>
                <p>{v.uri}</p>
                <p>{v.desc}</p>
              </button>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default ApiPage;
