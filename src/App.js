import './App.css'
import { useEffect } from 'react'
import { Game } from './components/game'
import { store } from './store'

function App() {
  useEffect(() => {
    store.dispatch({ type: 'NEW_GAME', payload: '' })
  }, [])

  return <Game />
}

export default App
