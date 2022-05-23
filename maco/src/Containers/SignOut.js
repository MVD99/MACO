import React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
function SignOut  ()  {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>SignOut</h1>
      <Badge></Badge>
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
    </div>
  );
};

export default SignOut;