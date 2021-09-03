import { Container } from "./SumaryStyles";

import entradaIcon from '../../assets/entradas.svg'
import saidasIcon from '../../assets/saidas.svg'
import totalIcon from '../../assets/total.svg'
import { useContext, useMemo } from "react";

import { TransactionContext } from "../../context/TrasactionContext";



export function Sumary(){

  const {transactions} = useContext(TransactionContext)

  const sumary = useMemo(()=>{
    return transactions.reduce((acc,transaction)=>{
      if(transaction.type ==='entrada'){
         acc.deposit += transaction.value
         acc.total += transaction.value
        }else{
          acc.withdrawals += transaction.value
          acc.total -= transaction.value
      }
      return acc
    } ,{
      deposit:0,
      total:0,
      withdrawals:0

    })  
   },[transactions])

  return (
    <Container >
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradaIcon} alt="" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(sumary.deposit)}</strong>
      </div>
      <div className="midle" >
        <header>
          <p>Saidas</p>
          <img src={saidasIcon} alt="" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(sumary.withdrawals)}</strong>
      </div>
      <div className="back-green">
        <header>
          <p>Total</p>
          <img src={totalIcon} alt="" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(sumary.total)}</strong>

      </div>
    </Container>
  )

}

