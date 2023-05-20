import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import theme from '../../utils/theme'
import { useDispatch } from 'react-redux'
import { dashboardState } from '../../redux/common'

export default function SimpleAccordion({ data }) {
  const dispatch = useDispatch()
  const handleClick = (option) => {
    dispatch(dashboardState({ option }))
  }

  return (
    <div>
      <Accordion
        elevation={0}
        sx={{
          borderRadius: '5px',
          color: theme.palette.primary.main,
          marginY: '1rem',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          color={theme.palette.secondary.lightGray}
        >
          <Typography fontWeight={'bold'}>{data.header}</Typography>
        </AccordionSummary>
        {data.options.map((element, index) => {
          return (
            <AccordionDetails
              key={index}
              sx={{ cursor: 'pointer' }}
              onClick={() => handleClick(element.label)}
            >
              <Typography color={theme.palette.secondary.gray}>
                {element.label}
              </Typography>
            </AccordionDetails>
          )
        })}
      </Accordion>
    </div>
  )
}
