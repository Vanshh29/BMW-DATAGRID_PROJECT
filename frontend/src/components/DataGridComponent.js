import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { fetchData, deleteData } from '../api';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Button, TextField, Box, Typography, CircularProgress } from '@mui/material';

ModuleRegistry.registerModules([AllCommunityModule]);

const DataGridComponent = () => {
  const [rowData, setRowData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Now accessible to useEffect and Search button
  const getData = useCallback(async () => {
    console.log('→ getData called, search:', search);
    try {
      setLoading(true);
      const res = await fetchData(search ? { search } : {});
      console.log('← API response:', res.data);
      setRowData(res.data);
    } catch (error) {
      console.error('Fetch failed:', error);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleView = (id) => navigate(`/details/${id}`);

  const handleDelete = async (id) => {
    try {
      await deleteData(id);
      getData();
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  const generateColumnDefs = () => {
    if (rowData.length === 0) return [];

    const keys = Object.keys(rowData[0]).filter(k => k !== '__v');
    const baseCols = keys.map(key => ({
      headerName: key.charAt(0).toUpperCase() + key.slice(1),
      field: key,
      sortable: true,
      filter: true,
      resizable: true,
    }));

    const actionCol = {
      headerName: 'Actions',
      field: 'actions',
      cellRenderer: (params) => (
        <Box display="flex" gap={1}>
          <Button size="small" variant="outlined" onClick={() => handleView(params.data._id)}>View</Button>
          <Button size="small" color="error" variant="outlined" onClick={() => handleDelete(params.data._id)}>Delete</Button>
        </Box>
      ),
    };

    return [...baseCols, actionCol];
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" gutterBottom>
        Generic Data Grid
      </Typography>

      <Box display="flex" gap={2} mb={2}>
        <TextField
          label="Search"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={getData} disabled={loading}>
          Search
        </Button>
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height={400}>
          <CircularProgress />
        </Box>
      ) : (
        <div className="ag-theme-alpine" style={{ height: 600, width: '100%' }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={generateColumnDefs()}
            onGridReady={() => console.log('Grid ready, columns:', generateColumnDefs())}
            pagination
            paginationPageSize={10}
            paginationPageSizeSelector={[10, 20, 50, 100]}
            domLayout="autoHeight"
            theme="legacy"
          />
        </div>
      )}
    </Box>
  );
};

export default DataGridComponent;
