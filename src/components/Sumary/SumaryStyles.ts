

import styled from 'styled-components'


export const Container = styled.div`
  
  
  display: flex;
  justify-content: space-between;
  margin-top: -4.5rem;
  
  @media(max-width:750px){
    flex-direction: column;
    
  }
  
  
  div{  
    width: 100%;
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    strong{
      margin-top: 1rem;
      display: block;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
      
    }

    
    &.midle {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  
  &.back-green{
    background-color: var(--green);
    color:#fff;
  }
  //adicionar a midia em cada elemento 

  @media(max-width:750px){
       
      &.midle {
        margin-left: 0;
        margin-right: 0;
      }

      & {
        margin-bottom: 1rem;
      }
         
  }

}
  
`


