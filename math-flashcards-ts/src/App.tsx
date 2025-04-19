import './App.css';
import Flashcard from './components/Flashcard';
import FlashcardPreview from './components/FlashcardPreview';
import Results from './components/Results';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FlashCardApp from './components/flashcardApp'

const App = () => {

  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/flashcard">Flashcard</Link>
      <Link to="/test">Test</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flashcard" element={<FlashCardApp />} />
    </Routes>
    </>
  );
}
export default App;