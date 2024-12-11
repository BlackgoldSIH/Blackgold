import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardContent, Typography, LinearProgress, Box, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Chart,ArcElement} from 'chart.js';



Chart.register(ArcElement)

const ProjectDetails = () => {
  const { projectid  } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(projectid)
    const fetchProject = async () => {
      try {
        const response = await axios.post(`http://127.0.0.1:8000/api/accounts/projectinfo/`,{"id":projectid}); // Adjust the API endpoint as needed
        setProject(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch project details.');
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectid]);

  if (loading) {
    return <Typography align="center" variant="h6">Loading...</Typography>;
  }

  if (error) {
    return <Typography align="center" variant="h6" color="error">{error}</Typography>;
  }

  const {
    title,
    description,
    status,
    start_date,
    end_date,
    current_progress_percentage,
    progress_status,
    duration,
    budget,
    funds_used,
    created_at,
    updated_at,
  } = project;

  // Data for the Doughnut chart
  const doughnutData = {
    labels: ['Funds Used', 'Remaining Funds'],
    datasets: [
      {
        data: [funds_used, budget - funds_used],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return (
    <Card style={{ maxWidth: 800, margin: '20px auto', padding: '20px' ,marginTop:
      '100px'
     }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>{title}</Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          {description}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1"><strong>Status:</strong> {status}</Typography>
            <Typography variant="subtitle1"><strong>Start Date:</strong> {new Date(start_date).toLocaleDateString()}</Typography>
            <Typography variant="subtitle1"><strong>End Date:</strong> {new Date(end_date).toLocaleDateString()}</Typography>
            <Typography variant="subtitle1"><strong>Duration:</strong> {duration}</Typography>
            <Typography variant="subtitle1"><strong>Created At:</strong> {new Date(created_at).toLocaleString()}</Typography>
            <Typography variant="subtitle1"><strong>Last Updated:</strong> {new Date(updated_at).toLocaleString()}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Doughnut data={doughnutData} />
              <Typography align="center" variant="subtitle1" style={{ marginTop: '10px' }}>
                Budget: ${budget.toLocaleString()} | Funds Used: ${funds_used.toLocaleString()}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box marginY={3}>
          <Typography variant="subtitle1"><strong>Progress:</strong></Typography>
          <LinearProgress 
            variant="determinate" 
            value={current_progress_percentage} 
            style={{ height: '10px', borderRadius: '5px' }} 
          />
          <Typography align="right" variant="caption">
            {current_progress_percentage}% - {progress_status}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectDetails;