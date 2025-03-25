import { useState } from 'react'
import Header from './Header'
import Search from './Search'
import ContentList from './ContentList'
import { Container, Box } from '@mui/material';

function App() {
  const [searchTerm, setSearchTerm] = useState("Girls")

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Header />
        <Search setSearchTerm={setSearchTerm} />
        <ContentList searchTerm={searchTerm} />
      </Box>
    </Container>
  )
}

export default App