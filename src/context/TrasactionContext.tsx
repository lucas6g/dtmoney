import React, {createContext, useEffect, useState} from 'react'
import { api } from '../services/api';


interface ITrasaction {
  id:number;
  title:string;
  value:number;
  category:string;
  type:'entrada'|'saque'
  createdAt:string;

}

interface ITransactionData {
  title:string;
  value:number;
  category:string;
  type:'entrada'|'saque';
 
}


interface TrasactionContextData {
 
  transactions:ITrasaction[];
  createTransaction(transactionData:ITransactionData):Promise<void>;
 
}
export const TransactionContext = createContext<TrasactionContextData>(
  {} as TrasactionContextData, 
);


//sempre que o estado no contexto é alterado tudo é rerender
const TrasactionProvider:React.FC = ({children}) =>{

  const [transactions,setTrasactions] = useState<ITrasaction[]>([])
  
  useEffect(()=>{
    api.get('transactions')
      .then((response)=>{
      setTrasactions(response.data.transactions)
    })

    },[])

   
  async function createTransaction(transactionData:ITransactionData):Promise<void>{
     const response = await api.post("transactions",{...transactionData,createdAt:new Date()})
     setTrasactions([...transactions,response.data.transaction])
   }


   return (
    <TransactionContext.Provider value={
    {
      createTransaction,
      transactions,
    
  
    
    }
    }>
      {children}
    </TransactionContext.Provider>
   );
}

export default TrasactionProvider
  




