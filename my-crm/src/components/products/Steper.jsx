import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ProductForm from './Product'
import ProductProvider from './Provider'
import Sumary from './Sumary'
import { createProduct } from '../../utils/api/product'
import { useDispatch, useSelector } from 'react-redux'
import { stepState } from '../../redux/common'

const steps = ['Nombre del producto', 'Proveedores', 'Detalles e inventario']

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0)
  const data = useSelector((state) => state.product)
  const dispatch = useDispatch()
  const { stepper } = useSelector((state) => state.common)

  // const handleNext = () => {
  //   //setActiveStep(activeStep + 1)
    
  // }

  useEffect(() =>{
    dispatch(stepState({ activeStep }));
  },[activeStep, dispatch])

  const handleBack = () => {
    setActiveStep(activeStep - 1)
    dispatch(stepState({ activeStep }))
  }

  const handleReset = () => {
    setActiveStep(0)
    dispatch(stepState({ activeStep: 0 }))
  }
  //console.log(activeStep);

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {}
          const labelProps = {}

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={() => setActiveStep(0)}>Reiniciar</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Paso {activeStep + 1}</Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              pt: 2,
              borderRadius: '15px',
              backgroundColor: '#fff',
              padding: '3rem',
            }}
          >
            {activeStep === 0 && <ProductForm />}
            {activeStep === 1 && <ProductProvider />}
            {activeStep === 2 && <Sumary />}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'flex-end',
                marginTop: '3rem',
              }}
            >
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={() => setActiveStep(activeStep-1)}
                sx={{ mr: 1 }}
              >
                Regresar
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={() => {setActiveStep(activeStep+1)}}>
                {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
              </Button>
            </Box>
          </Box>
        </React.Fragment>
      )}
    </Box>
  )
}
