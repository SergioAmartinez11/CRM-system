import React, {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from '../../utils/theme';

export default function SimpleAccordion({data}) {
 let [textColor, setTextColor] = useState('#0000');
 let [bgColor, setBackgroundColor] = useState('#ffff');

const handleClick = () =>{
  setTextColor('#ffff');
  setBackgroundColor(theme.palette.primary.main);
}

  return (
    <div>
      <Accordion elevation={0} sx={{borderRadius:'5px', color:theme.palette.primary.main, marginY:'1rem'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          color={theme.palette.primary.main}
        >
          <Typography fontWeight={'bold'}>{data.header}</Typography>
        </AccordionSummary>
        {data.options.map((opt) => {
          return (
            <AccordionDetails>
              <Typography color={'#9197B3'}>{opt.label}</Typography>
            </AccordionDetails>
          );
        })}
      </Accordion>
    </div>
  );
}
