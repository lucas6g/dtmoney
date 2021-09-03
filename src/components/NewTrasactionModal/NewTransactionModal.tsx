
import Modal from 'react-modal';
import {FormEvent, useCallback, useContext, useState} from 'react'
import { ModalContext } from "../../context/ModalContext";
import { Container, TrasactionTypeContainer } from './NewTransactionModalStyles';
import {RadioButton} from './NewTransactionModalStyles'
import closeIcon from '../../assets/btnFechar.svg'
import entradaIcon from '../../assets/entradas.svg'
import saidaIcon from '../../assets/saidas.svg'

import { TransactionContext } from '../../context/TrasactionContext';


Modal.setAppElement('#root')
export function NewTrasactionModal(){

  const [title,setTitle] = useState('')
  const [value,setValue] = useState(0)
  const [category,setCategory] = useState('')
  const [type,setType] = useState('deposit') 
  
  const {isNewModalTrasactionOpen,closeModal} = useContext(ModalContext)
  const {createTransaction} = useContext(TransactionContext)


  

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      
    await createTransaction({
      category,
      title,
      type:type === 'deposit'?'entrada':'saque',
      value
     
    })

    setTitle('')
    setCategory('')
    setValue(0)
    setType('deposit')

    closeModal()

    
    
    },
    [title,value,category,type,closeModal,createTransaction],
  );
  return (
    
    <Modal
      isOpen={isNewModalTrasactionOpen}
      onRequestClose={closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
      <Container onSubmit={handleSubmit}>
        <h2>Cadastrar Trasação</h2> 
        <button className="react-modal-close" type="button" >
          <img src={closeIcon} onClick={closeModal}  alt="Fechar Modal" />

        </button>
        <input onChange={(e)=>{
          setTitle(e.target.value)
        }} value={title} type="text" placeholder="Titulo" />
        
        <input onChange={(e)=>{
          setValue(Number(e.target.value))
        }} type="number" value={value} placeholder="Valor" />
          <TrasactionTypeContainer>

            <RadioButton onClick={()=> setType('deposit')} type="button"
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={entradaIcon} alt="" />
                Entradas
            </RadioButton >

            <RadioButton
          
            onClick={() => setType('whitdraw')}
           type="button"
            isActive={type === 'whitdraw'}
            activeColor="red"
            >
              <img src={saidaIcon} alt="" />
                Saidas
         
            </RadioButton>
          </TrasactionTypeContainer>
        <input onChange={(e)=>{

          setCategory(e.target.value)
        }} type="text" value={category} placeholder="Categoria" />

        <button  type="submit">Cadastrar</button>

      </Container>
  
  </Modal>
  )
}