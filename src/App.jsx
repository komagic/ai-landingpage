import { useEffect } from 'react'
import { MainContent } from './MainContent'
import './App.css'

function App () {
  useEffect(() => {
    const a = import('./main.js')
  }, [])

  return (
    <>
      <MainContent />
      <div id='chat-wrapper'>
        <div id='chat-bot-mood'>
          <div id='chat-bot-mood-icon'></div>
          <div id='chat-bot-mood-label'>
            <h1 id='chat-bot-mood-text'>与 Jarvis 对话</h1>
            <h1 id='chat-bot-mood-value'></h1>
          </div>
        </div>
        <div id='letter-pool'></div>
        <div id='temp-letter-pool'></div>
        <div id='letter-overlay'></div>
     
      </div>
    </>
  )
}

export default App
