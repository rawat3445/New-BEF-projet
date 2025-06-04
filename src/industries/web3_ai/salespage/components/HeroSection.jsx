import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Button, Paper } from '@mui/material';
// import Countdown from 'react-countdown';
import Eventvenue from './Eventvenue';
// Countdown target time
const targetDate = new Date("2025-07-25T10:00:00");

const HeroSection = () => {
  return (


     <div className="bg-black text-white py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6">
          <h4 className="text-yellow-400 font-semibold text-lg">Theme</h4>
          <h1 className="text-4xl font-bold leading-tight">
            Viksit Bharat by <span className="text-white">2047</span>
          </h1>
          <p className="text-gray-300">
            A Conclave for Visionaries — Join top industry leaders, policymakers,
            and innovators to shape India’s journey toward becoming a global technology powerhouse by 2047.
          </p>

          {/* Countdown Timer Placeholder */}
          <div className="bg-white text-black p-4 rounded-xl w-fit mx-auto md:mx-0 shadow-lg">
            <div className="flex flex-nowrap">
              <Eventvenue/>
            </div>
          </div>
        </div>

        {/* Right Map Image */}
        <div className="flex justify-center md:justify-end">

             <Grid item xs={12} md={6}>
     <Box
       sx={{
         borderRadius: 2,
         overflow: 'hidden',
         height: { xs: 300, md: 400 },
         boxShadow: 3,
       }}
     >
       <iframe
         title="Bharat Mandapam Location"
         width="100%"
         height="100%"
         frameBorder="0"
         style={{ border: 0 }}
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83908408798!2d77.06889993749999!3d28.5275825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f31f2993d7%3A0x109d227c3dcfc5f4!2sBharat%20Mandapam!5e0!3m2!1sen!2sin!4v1701288697065!5m2!1sen!2sin"
         allowFullScreen
       ></iframe>
     </Box>
   </Grid>


            
         
        </div>
      </div>
    </div>
  );
    // <Box
    //   sx={{
    //     background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    //     color: 'white',
    //     py: 8,
    //     px: { xs: 2, md: 10 },
    //   }}
    // >
    //   <Grid container spacing={4} alignItems="center">
    //     {/* Left Side: Info & Countdown */}
    //     <Grid item xs={12} md={6}>
    //       <Typography variant="h4" fontWeight="bold" gutterBottom>
    //         📍 Bharat Mandapam, New Delhi
    //       </Typography>
    //       <Typography variant="h6" gutterBottom>
    //         🕙 25th July 2025 | 10:00 AM - 9:00 PM IST
    //       </Typography>
    //       <Typography variant="h5" fontWeight="bold" color="secondary.main" gutterBottom>
    //         🎯 Theme: Viksit Bharat by 2047
    //       </Typography>
    //       <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
    //         🔥 A Conclave for Visionaries — Join top industry leaders, policymakers, and innovators
    //         to shape India’s journey toward becoming a global technology powerhouse by 2047.
    //       </Typography>
    //       <Paper sx={{ p: 2, bgcolor: '#111', display: 'inline-block' }}>
    //         <Typography variant="subtitle2" color="gray" gutterBottom>
    //           Countdown to the event:
    //         </Typography>
    //         <Typography variant="h5" color="primary">
    //           <Countdown date={targetDate} />
    //         </Typography>
    //       </Paper>
    //     </Grid>

    //     {/* Right Side: Map */}
    //     <Grid item xs={12} md={6}>
    //       <Box
    //         sx={{
    //           borderRadius: 2,
    //           overflow: 'hidden',
    //           height: { xs: 300, md: 400 },
    //           boxShadow: 3,
    //         }}
    //       >
    //         <iframe
    //           title="Bharat Mandapam Location"
    //           width="100%"
    //           height="100%"
    //           frameBorder="0"
    //           style={{ border: 0 }}
    //           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83908408798!2d77.06889993749999!3d28.5275825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f31f2993d7%3A0x109d227c3dcfc5f4!2sBharat%20Mandapam!5e0!3m2!1sen!2sin!4v1701288697065!5m2!1sen!2sin"
    //           allowFullScreen
    //         ></iframe>
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </Box>

};

export default HeroSection;
