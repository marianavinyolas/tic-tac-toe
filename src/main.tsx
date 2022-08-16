import React from 'react'
import ReactDOM from 'react-dom/client'

import TicTacToeApp from './TicTacToeApp'
import './styles.sass'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TicTacToeApp />
  </React.StrictMode>
)
