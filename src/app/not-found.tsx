'use client';
import { Box, Typography, Button, Stack } from '@mui/material';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 - 페이지를 찾을 수 없습니다</h1>
      <p>요청하신 페이지가 존재하지 않습니다.</p>
    </div>
  );
}
