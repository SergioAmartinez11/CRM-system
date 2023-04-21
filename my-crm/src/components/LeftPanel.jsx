import { Container } from '@mui/system';
import React, { useState } from 'react';
import { mainPanelButtons } from '../constants/buttons';
import styles from '../styles/LeftPanel.module.css';
import CustomAccordion from './common/CustomAccordion';


const employees ={
  header: 'Empleados',
  options: [{label:'registrar'}, {label:'editar'}, {label:'eliminar'}, {label:'ver todos'}]
}

const inventory ={
  header: 'Inventario',
  options: [{label:'registrar'}, {label:'editar'}, {label:'eliminar'}, {label:'ver todos'}]
}

export const LeftPanel = () => {
  const [tabSelected, setTabSelected] = useState(null);

  const handleTabSelected = (tab) =>{
    setTabSelected(tab);
  }

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
        
      </Container>
    </>
  );
};
