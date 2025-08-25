'use client';
import {
  Card,
  CardContent,
  CardHeader,
  Skeleton,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';

const FlexibleCard = ({
  title,
  value,
  moneyType = '원',
  isLoadingNeeded = false,
  children,
}: {
  title?: string;
  value?: string;
  moneyType?: string;
  isLoadingNeeded?: boolean;
  children?: React.ReactElement;
}) => {
  const [isLoading, setIsLoading] = useState(isLoadingNeeded);

  useEffect(() => {
    if (!isLoadingNeeded) return;
    const fetchWithDelay = new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });

    fetchWithDelay.then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <Card sx={{ flex: 1, height: '100%', background: '#dae2ea' }}>
      {title && <CardHeader title={title} slots={{ title: 'h6' }} />}
      <CardContent>
        {value && (
          <Typography gutterBottom variant="h5" component="div">
            {value} <span>{moneyType}</span>
          </Typography>
        )}

        {isLoading ? (
          <CardContent>
            <Skeleton variant="rectangular" width={300} height={150} />
          </CardContent>
        ) : (
          children
        )}
      </CardContent>
    </Card>
  );
};

export default FlexibleCard;
