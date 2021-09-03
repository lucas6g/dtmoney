import styled from 'styled-components'

export const Constainer = styled.header`
  background-color: var(--blue);
  

`
export const Content = styled.div`
  background-color: var(--blue);
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem  1rem 12rem ;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    font-size: 1rem;
    color: #ffffff;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.4s;

    @media(max-width:750px){
      padding:0 1rem ;
      font-size: 0.75rem;
    }

    &:hover{
      filter: brightness(0.9);
    }
  }

`




