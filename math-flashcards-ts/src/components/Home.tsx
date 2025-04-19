import { Card } from '@mui/material';
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <Card variant="outlined" sx={{ minWidth: 300, padding: 3 }}>
        <Link to="/">Home</Link>
        <Link to="/flashcard">Flashcard</Link>
    </Card>
  );
};

export default Home;