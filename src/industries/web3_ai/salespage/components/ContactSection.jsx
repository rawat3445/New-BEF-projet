import React from 'react';
import { Box, Grid, Typography, Stack } from '@mui/material';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import EmailIcon from '@mui/icons-material/Email';
import { Mail, MapPin, Phone, Megaphone } from 'lucide-react';
// import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import runnerImage from '../assets/img/logo.png'; // <-- Replace with your actual image path

const ContactSection = () => {
  return (
    <Box sx={{ backgroundColor: '#eaeaea', py: 4, px: 2 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Image */}
        <Grid item xs={12} md={6}>
          <img
            src={runnerImage}
            alt="Runners"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </Grid>

        {/* Right Contact Info */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
            GOT QUESTIONS?
          </Typography>

          <Stack spacing={4} mt={4}>
            {/* Address */}
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Phone color="primary" />
              <Box>
                <Typography fontWeight="bold">WRITE US</Typography>
                <Typography>123 Anywhere St., Any City, State 12345</Typography>
              </Box>
            </Stack>

            {/* Email */}
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Mail color="primary" />
              <Box>
                <Typography fontWeight="bold">SEND AN EMAIL</Typography>
                <Typography>hello@reallygreatsite.com</Typography>
              </Box>
            </Stack>

            {/* Phone */}
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Phone color="primary" />
              <Box>
                <Typography fontWeight="bold">CALL US</Typography>
                <Typography>123-456-7890</Typography>
              </Box>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
