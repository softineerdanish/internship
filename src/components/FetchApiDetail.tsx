import React, { useEffect, useState } from 'react'
import { IFetchApiDetail } from '../models/IFetchApiDetail'
import { ApiService } from '../services/ApiService'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef,  } from '@mui/x-data-grid';
import Component2 from './Component2';
import Example from './Example';



interface IState{
    
    apidetail: IFetchApiDetail,
    
}

const FetchApiDetail = () => {
  
  const [state , setState]= useState<IState>({
    apidetail:[] as IFetchApiDetail[],

  })  


  // network request
useEffect(() => {
  ApiService.getAllDetail()
  .then((res) => setState({
    ...state, apidetail:res.data
  })) 
},[]);

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'userId',
      headerName: 'User ID',
      width: 100,
      editable: true,
    },
    {
      field: 'title',
      headerName: 'Title of Post',
      width: 200,
      editable: true,
    },
    {
      field: 'body',
      headerName: 'Body of Post',
      width: 300,
      editable: true,
    },
    
  ];
  
//Fetch a list of JSON details from an API
const {apidetail} = state ;

const rows = apidetail.map((row) => ({
     id:row.id,
     userId:row.userId,
    title:row.title,
     body:row.body }
    ))


  


  return (
    <>
        <h1>Fetch a list of JSON details from an API</h1>
      <Box sx={{ height: 500, width: 940 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={[7]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>

    <Component2 />
    <Example />
    </>
  )
}

export default FetchApiDetail
