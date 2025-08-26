import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';

import { ChangeEvent, useState } from 'react';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

ModuleRegistry.registerModules([AllCommunityModule]);

const SimulationForm = () => {
  const [age, setAge] = useState('');
  const [amount, setAmount] = useState(1000);

  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    {
      회차: '1회',
      지급일: '2025.09.08',
      '지급 금액(세전)': '788,448원',
      원금: '100,000원',
      이자: '5000원',
      세금: '5000원',
      수수료: '5000원',
      지급금액: '5000원',
    },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: '회차' },
    { field: '지급일' },
    { field: '지급 금액(세전)' },
    { field: '원금' },
    { field: '이자' },
    { field: '세금' },
    { field: '수수료' },
    { field: '지급금액' },
  ]);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const handleAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      gap={2}
      position={'relative'}
    >
      <Box
        display="flex"
        justifyContent={'space-between'}
        sx={{ background: 'white', borderRadius: 3, width: 1 }}
        flexGrow={1}
      >
        <Box display="flex" flexGrow={1} sx={{ p: 1 }} alignItems={'center'}>
          <FormControl sx={{ width: 60 }}>
            <Input value={amount} onChange={handleAmount} />
          </FormControl>
          만원을
          <FormControl sx={{ width: 80 }}>
            <InputLabel id="demo-simple-select-label">개월</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
              sx={{ height: 50 }}
            >
              <MenuItem value={1}>1개월</MenuItem>
              <MenuItem value={2}>2개월</MenuItem>
              <MenuItem value={3}>3개월</MenuItem>
            </Select>
          </FormControl>
          동안 투자하면?
        </Box>
        <Box display="flex" alignItems={'center'}>
          세후 예상 수입 금액은
          <Typography variant="h5" color="#026CD6">
            188,325원
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: {
            xs: 'none',
            md: 'flex',
          },
          width: '100%',
        }}
      >
        <div className="h-[200px] w-[inherit]">
          <AgGridReact rowData={rowData} columnDefs={colDefs} />
        </div>
      </Box>
      <Box
        sx={{
          display: {
            xs: 'flex',
            md: 'none',
          },
          width: '100%',
        }}
      >
        <Box
          display="flex"
          sx={{ background: 'white', borderRadius: 3, width: '100%' }}
        >
          {rowData.map((item, index) => (
            <Box key={index} sx={{ width: '100%' }}>
              {Object.entries(item).map(([k, v]) => (
                <Box display={'flex'} justifyContent={'space-between'} key={k}>
                  <div>{k}</div>
                  <div>{v}</div>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
      <Button type="button" variant="contained" sx={{ px: 8, maxWidth: 300 }}>
        투자 신청하기
      </Button>
      <Box
        position="absolute"
        top={64}
        sx={{
          borderRadius: 30,
          background: 'black',
          width: 30,
          height: 30,
          color: 'white',
          textAlign: 'center',
        }}
      >
        <KeyboardArrowDownIcon />
      </Box>
    </Box>
  );
};

export default SimulationForm;
