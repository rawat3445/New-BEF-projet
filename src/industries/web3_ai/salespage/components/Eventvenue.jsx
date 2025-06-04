import * as React from 'react';
import { styled } from '@mui/material/styles';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Masonry from '@mui/lab/Masonry';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Mail, MapPin, Phone, Megaphone } from 'lucide-react';

const cards = [
  {
    id: 1,
    title: 'Date',
    description: '25th July 2025',
  },
  {
    id: 2,
    title: 'Venue',
    description: 'Bharat Mandapam, New Delhi, India',
  },
  {
    id: 3,
    title: 'Time',
    description: '10:00 AM - 9:00 PM IST',
  },
];

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: '#fff',
  color: (theme.vars || theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function Eventvenue() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <>
  
      <Box sx={{ width: 450 }}>
      <Masonry columns={3} spacing={2}>
        {cards.map((card, index) => (
          <Paper key={index}>
            <StyledAccordion sx={{ minHeight: 50 }}>
              <AccordionSummary expandIcon={<Mail />}>
                <Typography component="span">{card.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>{card.description}</AccordionDetails>
            </StyledAccordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
      </>
   
  );
}

export default Eventvenue;
