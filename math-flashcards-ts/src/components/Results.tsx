import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

interface ResultsProps {
  correctCount: number;
  totalProblems: number;
  timeTaken: number;
}

const Results: React.FC<ResultsProps> = ({ correctCount, totalProblems, timeTaken }) => {
  const minutes = Math.floor(timeTaken / 60);
  const seconds = timeTaken % 60;

  return (
    <Card variant="outlined" sx={{ minWidth: 300, padding: 3 }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Results
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          You got {correctCount} out of {totalProblems} correct!
        </Typography>
        <Typography variant="body1">
          Time taken: {minutes}:{seconds < 10 ? '0' : ''}{seconds}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Results;