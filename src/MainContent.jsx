import { MainButton } from "./MainButton"

export function MainContent () {
  return (
    <div
      style={{
        position: 'relative',
        top: '-100px',
        zIndex: 1000,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 className='headline'>A.I. 贾维斯</h1>
     
      <div id='chat-message-window' className="chat-wrapper">
      <input  className='message-input-field'
      id='message-input-field'
                type='text'
                maxLength='100' placeholder="Alexander·Nathaniel·Jarvis, 是一名GPT人工智能助手"/>
      </div>

      <div style={{marginTop:`20px`}}>
      <MainButton>开启对话</MainButton>

      </div>
    </div>
  )
}
