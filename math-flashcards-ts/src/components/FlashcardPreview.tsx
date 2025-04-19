import React from 'react';
import { Card, Typography, CardActionArea } from '@mui/material';
import { MathProblem } from '../utils/mathUtils';

interface FlashcardPreviewProps {
  problem: MathProblem;
  index: number;
  isCurrent: boolean;
}

const FlashcardPreview: React.FC<FlashcardPreviewProps> = ({ problem, index, isCurrent }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.8em',
        backgroundColor: isCurrent ? 'lightblue' : '#f9f9f9',
        cursor: 'pointer', // Optional
      }}
    >
      <CardActionArea>
        <Typography variant="h6">{problem.num1} {problem.operation} {problem.num2} </Typography>
      </CardActionArea>
    </Card>
  );
};

export default FlashcardPreview;