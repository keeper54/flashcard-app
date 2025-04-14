import React, { useState, useRef, useEffect } from 'react';
import { Card, TextField, Typography, CardContent } from '@mui/material';
import { MathProblem } from '../utils/mathUtils';

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

  return (
    <Card variant="outlined" sx={{ minWidth: 300, padding: 3 }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" component="div" mb={2}>
          {problem.problem} = ?
        </Typography>
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
      </CardContent>
    </Card>
  );
};

export default Flashcard;