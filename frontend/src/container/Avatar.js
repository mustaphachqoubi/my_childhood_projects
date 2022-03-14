import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2} >
      <Avatar alt="Za" src="/static/images/avatar/1.jpg" style={{background: '#EAAA2C'}} />
    </Stack>
  );
}