import React from 'react';
import { Box, Grid, Card, Typography, CardContent } from '@mui/material';
// import SpeakerIcon from '@mui/icons-material/Campaign';
// import NewspaperIcon from '@mui/icons-material/Article';
// import TvIcon from '@mui/icons-material/Tv';
// import SocialIcon from '@mui/icons-material/Public';
import { Mail, MapPin, Phone, Megaphone } from 'lucide-react';
const mediaData = [
  {
    icon: <Mail fontSize="large" color="primary" />,
    title: 'National Newspapers',
    description: 'Published insights & award features in top national dailies.',
  },
  {
    icon: <Mail fontSize="large" color="secondary" />,
    title: 'Magazines',
    description: 'Profiles of attendees & thought leaders.',
  },
  {
    icon: <Mail fontSize="large" color="success" />,
    title: 'TV & Podcasts',
    description: 'Exclusive interviews & event coverage across media.',
  },
  {
    icon: <Mail fontSize="large" color="error" />,
    title: 'Social Media Buzz',
    description: 'Viral engagement with #BEFConclave2025.',
  },
];

const MediaExposure = () => {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 4 }, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        🔊 Media & PR Exposure
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
        ✴️ Your Name in Headlines!
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: '1000px', mx: 'auto', mt: 4 }}
      >
        {mediaData.map((item, index) => (
          <Grid item xs={12} sm={6} md={6} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                width: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                p: 4,
                height: '200px',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
              elevation={4}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box mb={2}>{item.icon}</Box>
                <Typography variant="h6" fontWeight="bold" fontSize="1.25rem" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MediaExposure;
