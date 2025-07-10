import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchById } from '../api';
import { Box, Typography, Button } from '@mui/material';

const DetailView = () => {
  const { id } = useParams();
  const [record, setRecord] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getDetails = async () => {
      const { data } = await fetchById(id);
      setRecord(data);
    };
    getDetails();
  }, [id]);

  return (
    <Box sx={{ m: 4 }}>
      <Typography variant="h4" gutterBottom>Details</Typography>
      {Object.entries(record).map(([key, value]) => (
        <Typography key={key}><strong>{key}:</strong> {value?.toString()}</Typography>
      ))}
      <Button sx={{ mt: 3 }} variant="contained" onClick={() => navigate('/')}>Back</Button>
    </Box>
  );
};

export default DetailView;
