import React from 'react';
import { Box, Grid, Typography, Stack } from '@mui/material';
import { Mail, MapPin, Phone } from 'lucide-react';
import runnerImage from '../assets/img/contactus.png'; // <-- Replace with your actual image path

const ContactSection = () => {
  return (
    <Box sx={{ backgroundColor: '#eaeaea', py: 2, px: 4 }}>
      {/* Wrapper div with flexbox */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {/* Left Image */}
        <Box sx={{ display: 'flex',flex:1 ,alignItems:"center" }}>
          <img
            src={runnerImage}
            alt="Runners"
            style={{ width: '60%', height: 'auto', objectFit: 'cover' }}
          />
        </Box>

        {/* Right Contact Info */}
        <Box sx={{ flex: '1' }}>
          <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
            GOT QUESTIONS?
          </Typography>

          <Stack spacing={4} mt={4}>
            {/* Address */}
            <Stack direction="row" spacing={2} alignItems="center">
              <MapPin className="text-blue-500 w-6 h-6" />
              <Box>
                <Typography fontWeight="bold">WRITE US</Typography>
                <Typography>123 Anywhere St., Any City, State 12345</Typography>
              </Box>
            </Stack>

            {/* Email */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Mail className="text-blue-500 w-6 h-6" />
              <Box>
                <Typography fontWeight="bold">SEND AN EMAIL</Typography>
                <Typography>hello@reallygreatsite.com</Typography>
              </Box>
            </Stack>

            {/* Phone */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Phone className="text-blue-500 w-6 h-6" />
              <Box>
                <Typography fontWeight="bold">CALL US</Typography>
                <Typography>123-456-7890</Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;
