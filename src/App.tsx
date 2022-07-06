import './App.scss'
import {VocabList} from "./packages/vocabList"

function App() {
  const randomNumber = Math.floor(Math.random() * Math.floor(VocabList.length))

  return (

    <div className="App">
      <p>Exhale Words</p>
      <a className="portfolio" href="https://otinomz.vercel.app">My Portfolio</a>
      <a className="email" href="https://mail.google.com/mail/u/0/#inbox">Email</a>
      <a className="slack" href="https://app.slack.com/"> Slack <a/>
      <a className="twitter" href="https://twitter.com/">Twitter</a>
      <a className="whatsApp" href="https://web.whatsapp.com/">WhatsApp</a>
      <a className="youtube" href="https://youtube.com/">YouTube</a>
      <a className="github" href="https://github.com/">Github</a>
      <a className="localhost" href="http://localhost:3000/">localhost:3000</a>
      <a className="localhost2" href="http://localhost:3001/">localhost:3001</a>

      <h1>{VocabList[randomNumber].word}</h1>
      <h3>{VocabList[randomNumber].definition }.</h3>
    </div>

  )
}

export default App;
