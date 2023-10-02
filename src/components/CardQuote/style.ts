import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  footer {
    text-align: center;
    display: block;
    margin: 1rem 0;
    font-size: 0.8rem;
    color: ${(props) => props.theme.white};
    width: 30rem;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.white};
    }
  }
`
export const QuoteContainer = styled.div`
  width: auto;
  padding: 2.5rem 3.125rem;
  background: ${(props) => props.theme.white};
  border-radius: 3px;
`
export const QuoteContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`
export const Content = styled.div`
  text-align: center;
  display: flex;
  max-width: 40rem;
  color: ${(props) => props.theme.randomTheme};
`
export const Author = styled.div`
  display: flex;
  justify-content: end;
`
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.5rem;

  button {
    height: 2.375rem;
    border: none;
    border-radius: 3px;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.randomTheme};
    outline: none;
    font-size: 0.85rem;
    padding: 0.5rem 1.125rem 0.5rem 1.125rem;
  }

  button:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`
export const Links = styled.div`
  display: flex;
  gap: 0.25rem;

  a {
    background: ${(props) => props.theme.randomTheme};
    width: 2.375rem;
    height: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    color: ${(props) => props.theme.white};
  }
`
