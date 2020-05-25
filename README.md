# PagHiper - NodeJS
Package para geração de boletos utilizando o PagHiper.
http://paghiper.com.br/

### Instalação

Para fazer a instalação no seu projeto node utilize o npm para baixar e instalar o pacote no seu projeto
##### com yarn
```bash
yarn add paghiper
```

##### com npm
```bash
npm i paghiper --save
```

### Observações

Esse package está sendo desenvolvido para fins de estudo com o NodeJS. Qualquer critica construtiva é bem-vinda.


### Como usar
Para gerar suas credenciais acesse o site do PagHiper => https://www.paghiper.com/painel/credenciais/
```javascript
  const ph = require('paghiper');
  
  class PaymentController {
    
    constructor()
    {
      this.paghiper = ph.create({
        apiKey: 'apk_xasd564564as54da65s4d6a54sd6a54sd', //Você pode pegar as credenciais direto na sua conta do PagHiper
        notificationUrl: 'http://seusite.com.br/paghiper/callback'
      })
    }
    
    generateBankSlip()
    {
      this.pagHiper.setPaymentData({
        order_id:   'asdasd123123', //Numero do pedido
        email:      'email_do_cliente@teste.com', //E-mail do cliente
        name:       'joao da silva', //Nome do cliente
        cpf_cnpj:   '00000000191', //CPF ou CNPJ
        phone:      '11900000000', //Numero do telefone do cliente
        days_due:   5, //Dias para o vencimento. É calculado baseado na data atual
        per_day_interest:  true, //Juros por dia de atraso
        items: [{
          description: 'Produto 1', //Descrição do produto
          quantity: 1, //Quantidade
          item_id: 'xpto123', // código do produto
          price_cents: 8000 //Valor do item em centavos
        }]
      });
      
      const boleto = await this.pagHiper.boleto();
      
      if(boleto.result === 'success'){
        //Boleto gerado com sucesso
      }else{
        //erro ao gerar o boleto
        console.log(boleto)
      }
      
    } 
    
  }
```

## TODO
Estou criando os metodos de callback e cancelamento dos boletos
