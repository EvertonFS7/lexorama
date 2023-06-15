'use client'

import { Breadcump } from '../components/breadcump'
import { Card } from '../components/card'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'

export default function PatientRegistration() {
  const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ]

  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ]
  return (
    <div className="space-y-6">
      <Breadcump descriptionCurrentPage="Cadastro de Pacientes" />
      <Card title="Lista de pacientes">
        <DataGrid rows={rows} columns={columns} />
      </Card>
    </div>
  )
}
