import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { store } from './store/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
    <App />
    </Provider>
  
)

// react strict mode make sure karta h li sab theek se chal raha h ki nahi that's why vo 2 baar chalata h so isko hum delete kardenge
//provider h vo ek props keta h store naam ka toh hum kya karenge ki uske andar store pass kardenge basically provider ek reacr redux binding tool h
//ap ek global slice create karwa sakte h or uske andar saari files save karwa sakte h 