import React, { useState, useRef, useEffect } from 'react';
import { Card, TextField, Typography, CardContent, Divider, Grid, Box } from '@mui/material';
import { MathProblem } from '../utils/mathUtils';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

interface FlashcardProps {
  problem: MathProblem;
  onAnswerSubmit: (answer: number) => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ problem, onAnswerSubmit }) => {
  const [answer, setAnswer] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [problem]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const numericAnswer = parseInt(answer, 10);
      if (!isNaN(numericAnswer)) {
        onAnswerSubmit(numericAnswer);
        setAnswer('');
      }
    }
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    padding: theme.spacing(1),
    textAlign: 'right',
    color: 'black'
  }));
  return (
    <Grid container maxWidth={800} width={400} spacing={0} rowSpacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid size={3}>
      &nbsp;
      </Grid>
      <Grid size={9}>
        <Typography variant="h2" component="div" mb={2} align='left'>
            {problem.num1}
          </Typography>
      </Grid>
      <Grid size={3}>
          <Typography variant="h2" width={100} component="div" mb={2} align='left'>
            {problem.operation}
          </Typography>
      </Grid>
      <Grid size={9}>
          <Typography variant="h2" width={100} component="div" mb={2} align='left'>
            {problem.num2}
          </Typography>
      </Grid>
      <Grid size={12}>
          <Typography variant="h2" width={100} component="div" mb={2} align='left'>
            <Divider sx={{ width: '100%', height: 1, backgroundColor: 'black' }} />
          </Typography>
      </Grid>
      <Grid size={12}>

          <TextField
          inputRef={inputRef}
          label="Your Answer"
          variant="outlined"
          type="number"
          value={answer}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          sx={{ width: '100%', maxWidth: 200 }}
        />

      </Grid>
    </Grid>
  );
};

export default Flashcard;