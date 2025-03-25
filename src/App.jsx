import { useState } from 'react'
import Header from './Header'
import Search from './Search'
import ContentList from './ContentList'
import { Container, Box } from '@mui/material';
import Sort from './Sort';
import FullSchedule from './FullSchedule';




function App() {
  const [searchTerm, setSearchTerm] = useState("Office")

  const [movies, setMovies] = useState([])

  const [originalMovies, setOriginalMovies] = useState([]);
  const resetMovies = () => {
    setMovies([...originalMovies]); // office 
  };
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Header />
        <Search setSearchTerm={setSearchTerm} />
        <Sort movies={movies} setMovies={setMovies} resetMovies={resetMovies} />
        <ContentList searchTerm={searchTerm} setMovies={setMovies} movies={movies} setOriginalMovies={setOriginalMovies} />
        <FullSchedule />


      </Box>
    </Container>
  )
}

export default App