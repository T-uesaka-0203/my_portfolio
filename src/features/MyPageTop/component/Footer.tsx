import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return(
        <Box
        component="footer"
        sx={{
          backgroundColor: '#33CCFF', // フッターの背景色
          color: 'white',                  // テキストの色
          textAlign: 'center',             // テキストを中央揃え
          padding: 2,                      // パディング
        }}
        >
        <Typography sx={{ fontSize: { xs: '12px', sm: '12px', md: '18px', lg:"20px" } }} >
          &copy; {new Date().getFullYear()} CopyRight@Tadayoshi Uesaka. All Rights Reserved.
        </Typography>
      </Box>
      );
    }

export default Footer;
