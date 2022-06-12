import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ClientCell({params}) {
  return (
    <div className='flex space-x-2'>
      <Stack direction="row" spacing={2}>
      <Avatar alt={params?.client || ""} src={params?.clientPhotoUrl} />
    </Stack>
    <div className='flex items-center '> {params.client.toUpperCase()}</div>  
    </div>
  );
} 
