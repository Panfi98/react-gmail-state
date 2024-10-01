import Header from './components/Header'
import initialEmails from './data/emails'
import { useState, useMemo } from 'react'
import './styles/App.css'

function App() {
  // Use initialEmails for state
  console.log(initialEmails)
  const [emails, setEmails] = useState(initialEmails)
  const [box, setBox] = useState('inbox')
  const [star, setStar] = useState(false)

  function toggleRead(target) {
    const newEmails = emails.map(email =>
      email.id === target.id ?
        { ...email, read: !email.read } :
        email
    )
    setEmails(newEmails)
  }

  function toggleStarred(target) {
    const newEmails = emails.map(email =>
      email.id === target.id ?
        { ...email, starred: !email.starred } :
        email
    )
    setEmails(newEmails)
  }

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"


          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
          //todo
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
            //todo
            />
          </li>
        </ul>
      </nav>
      <main className="emails">{
        <ul>
          {emails.map(email => (
            <li className={`email ${email.read ? 'read' : ''}`} onClick={() => toggleRead(email)} key={email.id}>
              <div className="select">
                <input
                  className="select-checkbox"
                  type="checkbox"
                />
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                  onChange={() => toggleStarred(email)}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
          ))}
          <li>

          </li>
        </ul>
      }</main>
    </div>
  )
}

export default App
