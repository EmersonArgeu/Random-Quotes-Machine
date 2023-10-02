import { useState } from 'react'
import {
  Author,
  Links,
  QuoteContent,
  Wrapper,
  QuoteContainer,
  Buttons,
  Content,
} from './style'
import { TwitterLogo, FacebookLogo } from 'phosphor-react'
import quotes from '../../assets/DB/quotes.json'

const database = quotes

interface Quote {
  quote: string
  author: string
}

export function CardQuote() {
  const [newQuote, setNewQuote] = useState<Quote>(getRandomQuote())

  function getRandomQuote() {
    return database.quotes[Math.floor(Math.random() * database.quotes.length)]
  }

  function changeQuote() {
    setNewQuote(getRandomQuote())
  }

  return (
    <Wrapper>
      <QuoteContainer id="quote-box">
        <QuoteContent>
          <Content>
            <h1 id="text">{newQuote.quote}</h1>
          </Content>
          <Author>
            <p id="author">{newQuote.author}</p>
          </Author>
        </QuoteContent>
        <Buttons>
          <Links>
            <a href="twitter.com/intent/tweet" id="tweet-quote">
              <TwitterLogo size={24} weight="fill" />
            </a>
            <a href="">
              <FacebookLogo size={24} weight="fill" />
            </a>
          </Links>
          <button id="new-quote" onClick={changeQuote}>
            New Quote
          </button>
        </Buttons>
      </QuoteContainer>
      <footer>
        by <a href="">Argeu</a>
      </footer>
    </Wrapper>
  )
}
