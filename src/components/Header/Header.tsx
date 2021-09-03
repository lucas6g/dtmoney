 import { useContext } from 'react'
import logo from '../../assets/logo.svg'
import { ModalContext } from '../../context/ModalContext'

import { Constainer, Content } from './HeaderStyles'


 
 export function Header(){

  const {openModal} = useContext(ModalContext)
 

  return (
    <Constainer>
        <Content>
          <img src={logo} alt="dt money" /> 
          <button onClick={openModal}  type="button">Nova trasação</button>

           
        </Content>
    </Constainer>
  )
 }