import styled from 'styled-components'
import {transparentize} from 'polished'


export const Container = styled.form`

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;

  }

  input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background-color: #e7e9ee;
    border: #d7d7d7;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
      color: var(--text-color);

    }
    & + input {
      margin-top: 1rem;
    }

    
  }

  button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    color: white;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1rem;
    transition: filter 0.4s;
    font-weight: 600;
    

    &:hover{
      filter: brightness(0.9);
    }
  }

`

export const TrasactionTypeContainer = styled.div`

display: flex;



`
//para estilizar components 
interface RadioButtonProps   {
  isActive?:boolean;
  activeColor:'green'|'red';
}


const colors = {
  green:'#33CC95',
  red:'#e52e4d'
}


export const RadioButton = styled.button<RadioButtonProps>`
 
    background-color:${(props)=> props.isActive ? transparentize(0.9,colors[props.activeColor]) : 'transparent'};

    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--title);
    margin: 1rem 0;
    font-weight: 400;
    border-radius: 0.25rem;
    border:  1px solid #d7d7d7;
    transition: border-color 0.4s;

    
    img{
      margin-right: 1rem;
      width: 20px;
      height: 20px;

    }
    & + button {
      margin-left: 1rem;
    }

    &:hover {
      border-color: #aaa;
    }

    @media(max-width:360px){
      padding: 0 ;
    }

    
 
`