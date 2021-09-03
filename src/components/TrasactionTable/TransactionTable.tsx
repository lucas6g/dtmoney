import { useContext } from "react";
import { Container } from "./TransactionTableStyles";
import {TransactionRow} from '../TrasactionRow/TrasactionRow'
import { TransactionContext } from "../../context/TrasactionContext";

export function TrasactionTable(){

  const {transactions} = useContext(TransactionContext)



  return (
   <Container>
     <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>

        </thead>

          <tbody>
            {transactions.map((trasaction)=>{
              return (
                <TransactionRow 
                  key={trasaction.id}
                  
                  title={trasaction.title}
                  value={new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(Number(trasaction.value))}
                  type={trasaction.type}
                  category={trasaction.category}
                  createdAt={new Intl.DateTimeFormat('pt-BR').format(new Date(trasaction.createdAt))}
                
                />
              )
            })}


          </tbody>

     </table>
     
   </Container>
  )
}