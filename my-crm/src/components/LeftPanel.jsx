import { Container } from '@mui/system';
import React, { useState } from 'react';
import { mainPanelButtons } from '../constants/buttons';
import styles from '../styles/LeftPanel.module.css';
import CustomAccordion from './common/CustomAccordion';
import { Box } from '@mui/material';


const employees ={
  header: 'Empleados',
  options: [{label:'Agregar empleado'}, {label:'Administrar'}, {label:'Ver todos'}]
}

const inventory ={
  header: 'Inventario',
  options: [{label:'Administrar empleados'}, {label:'Ver empleados'}]
}

const marketing ={
  header: 'Mercadotecnia',
  options: [{label:'Ver clientes'}]
}

const config ={
  header: 'Configuracion',
  options: [{label:'Cerrar sesion'}]
}


export const LeftPanel = () => {
  const [tabSelected, setTabSelected] = useState(0);

  

  return (
    <>
      <Container
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingY: '3rem',
        }}
      >
        <div className={styles.title}>My-CRM</div>
      
        
        <CustomAccordion data={employees}/>
        <CustomAccordion data={inventory}/>
        <CustomAccordion data={marketing}/>
        <CustomAccordion data={config} />
      </Container>
    </>
  );
};
