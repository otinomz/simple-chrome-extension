import './App.scss'
import { dailyLink } from './packages/dailyLink';
import {VocabList} from "./packages/vocabList"

function App() {
  const randomNumber = Math.floor(Math.random() * Math.floor(VocabList.length))

  return (

    <div className="App">
      <p>Exhale Words</p>
      <a className="portfolio" href="https://otinomz.vercel.app">My Portfolio</a>
      
      <div className="frequentLink">
        {dailyLink.map((dayLink) => (
          <a key={dayLink.id} href={dayLink.link}>{dayLink.name}</a>    
        ))}
      </div>
      
      <h1>{VocabList[randomNumber].word}</h1>
      <h3>{VocabList[randomNumber].definition}.</h3>
        
    </div>

  )
}

export default App;
