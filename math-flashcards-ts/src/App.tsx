import React, { useState, useEffect } from 'react';
import './App.css';
import { generateProblemSet, MathProblem } from './utils/mathUtils';
import Flashcard from './components/Flashcard';
import FlashcardPreview from './components/FlashcardPreview';
import Results from './components/Results';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';


const App = () => {
  const [problems, setProblems] = useState<MathProblem[]>([]);
  const [currentProblemIndex, setCurrentProblemIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<boolean[]>(Array(100).fill(false));
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  useEffect(() => {
    const initialProblems = generateProblemSet(10, '*');
    setProblems(initialProblems);
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
    <Box sx={{ width: '100%', maxWidth: 1500, bgcolor: 'background.paper' }}>
      <Grid container spacing={2}>

        <Grid container spacing={2} width={'75%'} height={'100vh'} margin={'auto'} alignItems={'stretch'} justifyContent={'flex-start'} direction={'row'}>
              {problems.map((problem, index) => (
                  <Grid size={1} className="flashcard-preview" key={index}>
                    <Item key={index} className="flashcard-item">
                      <FlashcardPreview
                      index={index}
                      problem={problem}
                      isCurrent={index === currentProblemIndex}
                      />
                    </Item> 
                  </Grid>
              ))}
        

        </Grid>

        <Grid container spacing={1} width={'20%'} height={'100vh'}>
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

    </Box>
  );
}
export default App;