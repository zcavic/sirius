import { Typography, Box, useTheme } from '@mui/material';
import { tokens } from '../features/theme/theme';
import { useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h1"
        color={colors.grey[300]}
        fontWeight="bold"
        sx={{ m: '5px 0 5px 35px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ paddingRight: '20px' }}>
            {time.toLocaleTimeString(undefined, {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
          <div style={{ paddingRight: '20px' }}>
            {time.toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>
      </Typography>
    </Box>
  );
};

export default Clock;
