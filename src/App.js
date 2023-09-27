import './App.css'
import { useEffect } from 'react'
import { Game } from './components/game'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch()
  }, [dispatch])

  return <Game />
}

export default App
