import React from 'react'
import Container from '@mui/material/Container'
import TreeView from '@mui/lab/TreeView'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import TreeItem from '@mui/lab/TreeItem'
import theme from '../utils/theme'
import { Typography } from '@mui/material'

export const Tree = () => {
  return (
    <>
      <div>
        <header className="App-header">
          <Container
            maxWidth={theme.breakpoints.values.lg}
            sx={{ height: '80vh' }}
          >
            <h2 style={{ textAlign: 'left' }}>Mapa del sitio</h2>

            <h3 style={{ textAlign: 'left' }}>Menu lateral</h3>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{
                height: 400,
                flexGrow: 1,
                maxWidth: 400,
                
                textAlign: 'left',
              }}
            >
              <TreeItem nodeId="1" label="Empleados">
                <TreeItem nodeId="2" label="Agregar empleado" />
                <TreeItem nodeId="3" label="Tabla de empleados" />
              </TreeItem>
              <TreeItem nodeId="1" label="Invetario">
                <TreeItem nodeId="4" label="Agregar producto" />
                <TreeItem nodeId="5" label="Tabla de productos" />
              </TreeItem>
              <TreeItem nodeId="1" label="Contacto" />
              <TreeItem nodeId="7" label="Email" />
              <TreeItem nodeId="1" label="Configuración">
                <TreeItem nodeId="8" label="Mapa del sitio" />
                <TreeItem nodeId="9" label="Cerrar sesión" />
              </TreeItem>
            </TreeView>
          </Container>
        </header>
      </div>
    </>
  )
}
