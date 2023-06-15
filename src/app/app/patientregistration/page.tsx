'use client'

import { Breadcump } from '../components/breadcump'
import { Card } from '../components/card'
import { DataGrid, GridColDef, ptBR } from '@mui/x-data-grid'

export default async function PatientRegistration() {
  const columns: GridColDef[] = [
    { field: 'patient_name', headerName: 'Column 1', width: 150 },
    { field: 'patient_cpf', headerName: 'Column 2', width: 150 },
    { field: 'patient_age', headerName: 'Column 2', width: 150 },
    { field: 'patient_gender', headerName: 'Column 2', width: 150 },
    { field: 'responsible_name', headerName: 'Column 2', width: 150 },
    { field: 'responsible_cpf', headerName: 'Column 2', width: 150 },
    { field: 'responsible_age', headerName: 'Column 2', width: 150 },
    { field: 'responsible_gender', headerName: 'Column 2', width: 150 },
    { field: 'Degree_kinship_responsible', headerName: 'Column 2', width: 150 },
    { field: 'responsible_phone', headerName: 'Column 2', width: 150 },
  ]

  return (
    <div className="space-y-6">
      <Breadcump descriptionCurrentPage="Cadastro de Pacientes" />
      <Card title="Lista de pacientes">
        <DataGrid
          rows={[]}
          columns={columns}
          getRowId={(row) => row.entidade_id}
          checkboxSelection
          autoHeight
          rowHeight={60}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          pageSizeOptions={[10, 25, 50]}
        />
      </Card>
    </div>
  )
}
