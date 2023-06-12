import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';


createServer({
  models: {
    transaction: Model, //aqui é justamente o transaction no singular, e eu defini por obrigação q ele é do tipo Model, e fiz isso fazendo uma importação do Mirage.js
  },

  seeds(server) { //'seeds' é uma função. 'server' é uma propriedade. 
    server.db.loadData({
      transactions: [ //transactions é o nome do model no plural
        {
        id:1, //é apenas um dado pre-cadastrado dentro do banco de dados
        title: 'Freelance de web-site',
        amount: '6000',
        type: 'deposit',
        category: 'dev',

        createdAt: new Date('2023-06-06 09:47:00'),
        },
        
        {
          id:2,
          title: 'Pgto aluguel',
          amount: '3500',
          type: 'withdraw',
          category: 'gasto com casa',
          createdAt: new Date('2021-06-09 10:30:00'),
        }
        
      ,]
  })
},

routes() {
    this.namespace = 'api'; //this pode ser lido como "quando houver um..." p.ex. quando houver um namespace.

    //o this.get é uma rota de listagem
    this.get('/transactions', () => {
       return this.schema.all('transaction')//ou seja, aqui ele retorna todas as transações que eu tiver no meu banco de dados mirage
    })
    //schema é a palavra usada para o banco de datos do miragejs
    //request significa os dados que estamos enviado para o banco de dados
    //já o  this.post é uma rota que estamos definindo pois o mirage precisa de uma rota dos dados que eu envio
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
       
  });
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);