import React, { useState, useEffect } from 'react';
import { generateProblemSet, MathProblem } from '../utils/mathUtils';
import { Box, Grid, Typography } from '@mui/material';
import Item from '@mui/material/Grid';
import FlashcardPreview from './FlashcardPreview';
import Results from './Results';
import Flashcard from './Flashcard';

const FlashCardApp: React.FC = () => {
const [problems, setProblems] = useState<MathProblem[]>([]);
const [currentProblemIndex, setCurrentProblemIndex] = useState<number>(0);
const [userAnswers, setUserAnswers] = useState<boolean[]>(Array(100).fill(false));
const [startTime, setStartTime] = useState<Date | null>(null);
const [endTime, setEndTime] = useState<Date | null>(null);

useEffect(() => {
  const initialProblems = generateProblemSet(100, '*');
  setProblems(initialProblems);
  console.log(initialProblems);
  setStartTime(new Date());
}, []);

const handleAnswerSubmit = (answer: number) => {
  if (currentProblemIndex < problems.length) {
    const isCorrect = answer === problems[currentProblemIndex].answer;
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentProblemIndex] = isCorrect;
    setUserAnswers(updatedAnswers);

    if (currentProblemIndex === problems.length - 1) {
      setEndTime(new Date());
    } else {
      setCurrentProblemIndex((prevIndex) => prevIndex + 1);
    }
  }
};

const calculateCorrectAnswers = (): number => {
  return userAnswers.filter((answer) => answer).length;
};

const calculateTimeTaken = (): number => {
  if (startTime && endTime) {
    return Math.round((endTime.getTime() - startTime.getTime()) / 1000);
  }
  return 0;
};

const currentProblem = problems[currentProblemIndex];
const isFinished = endTime !== null;


return (
<>
<Grid container spacing={0}>

  <Grid container spacing={1} width={'65%'} height={'100vh'} margin={10} padding={10}>
        {problems.map((problem, index) => (
            <Grid size={1} key={index} boxShadow={2} padding={1} margin={1}>
              <div key={index} className="flashcard-item">
                <FlashcardPreview
                index={index}
                problem={problem}
                isCurrent={index === currentProblemIndex}
                />
              </div> 
            </Grid>
        ))}
  

  </Grid>

  <Grid container spacing={1} width={'20%'}>
    <Grid size={10}>
      <Item>
        {isFinished ? (
          <Results
            correctCount={calculateCorrectAnswers()}
            totalProblems={problems.length}
            timeTaken={calculateTimeTaken()}
          />
        ) : currentProblem ? (
          <Flashcard problem={currentProblem} onAnswerSubmit={handleAnswerSubmit} />
        ) : (
          <Typography variant="h6">Loading problems...</Typography>
        )}
      </Item>
    </Grid>
  </Grid>
</Grid>

</>
)
}

export default FlashCardApp;