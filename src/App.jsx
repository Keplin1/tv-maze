import { useState } from 'react'
import './App.css'
import Header from './Header'
import Search from './Search'
import ContentList from './ContentList'

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div>
      <Header />
      <Search setSearchTerm={setSearchTerm}/>
      <ContentList searchTerm={searchTerm}/>
    </div>
  )
}

export default App
