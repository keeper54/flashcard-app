import React from 'react';
import { Card, Typography, CardActionArea, Grid, Divider } from '@mui/material';
import { MathProblem } from '../utils/mathUtils';

interface FlashcardPreviewProps {
  problem: MathProblem;
  index: number;
  isCurrent: boolean;
}

const FlashcardPreview: React.FC<FlashcardPreviewProps> = ({ problem, index, isCurrent }) => {
  return (
        <div className='preview-holder'>
          <div className='num1'>
                {problem.num1}
          </div>
          <div className='operation'>
            {problem.operation}
          </div>
          <div className='num2'>
            {problem.num2}
          </div>
        </div>
  );
};

export default FlashcardPreview;