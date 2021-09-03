import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs'
import ModalContextProvider from './context/ModalContext'

import {App} from './App';
import TransactionContextProvider from './context/TrasactionContext';

createServer({

  models:{
    transaction:Model
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id:1,
          title:'flila',
          type:'entrada',
          category:'Dev',
          value:6000,
          createdAt:new Date('2020-02-12 09:00:00')
        },
        {
          id:2,
          title:'flila',
          type:'saque',
          category:'Dev',
          value:6000,
          createdAt:new Date('2020-02-12 09:00:00')
        }

      ]
    })
  },
  routes(){
    this.namespace = 'api' //todas as chamadas com api antes serao direcionadas para o mirage


    this.get('/transactions',()=>{
      return this.schema.all('transaction')
    })

    this.post('/transactions',(schema,request)=>{
      const data = JSON.parse( request.requestBody)
      return schema.create('transaction',data) 
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <TransactionContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </TransactionContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

