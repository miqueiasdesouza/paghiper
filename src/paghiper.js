const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api.paghiper.com'
});

class PagHiper {

    constructor()
    {
        this.credentials = {
            apiKey: String,
            notificationUrl: String
        };

        this.data = {
            order_id:   String,
            email:    String,
            name:     String,
            cpf_cnpj: String,
            phone:    String,
            street:   String,
            number:   String,
            complement: String,
            district:  String,
            city:      String,
            state:     String,
            postcode:  String,
            discount:   String,
            shipping_price: String,
            shipping_methods:  String,
            fixed_description:  true,
            type_paper:  'boletoA4',
            days_due:  String,
            late_payment_fine:  String,
            per_day_interest:  true,
            items: []
        }
    }

    create({apiKey, notificationUrl})
    {
        this.credentials.apiKey = apiKey;
        this.credentials.notificationUrl = notificationUrl;

        return this;
    }

    setPaymentData(data)
    {
        
        this.data.order_id = data.order_id;
        this.data.email = data.email;
        this.data.name = data.name;
        this.data.cpf_cnpj = data.cpf_cnpj;
        this.data.phone = data.phone;
        this.data.street = data.street;
        this.data.number = data.number;
        this.data.complement = data.complement;
        this.data.district = data.district;
        this.data.city = data.city;
        this.data.state = data.state;
        this.data.postcode = data.postcode;
        this.data.discount = data.discount;
        this.data.shipping_price = data.shipping_price;
        this.data.shipping_methods = data.shipping_methods;
        // this.data.type_paper = data.type_paper;
        this.data.days_due = data.days_due;
        this.data.late_payment_fine = data.late_payment_fine;
        this.data.per_day_interest = data.per_day_interest
        this.data.items = data.items;
    }


    async boleto()
    {
        const payment_data = {
            apiKey:         this.credentials.apiKey,
            order_id:       this.data.order_id,
            payer_email:    this.data.email,
            payer_name:     this.data.name,
            payer_cpf_cnpj: this.data.cpf_cnpj,
            payer_phone:    this.data.phone,
            payer_street:   this.data.street,
            payer_number:   this.data.number,
            payer_complement: this.data.complement,
            payer_district:  this.data.district,
            payer_city:      this.data.city,
            payer_state:     this.data.state,
            payer_zip_code:  this.data.postcode,
            notification_url: this.credentials.notificationUrl,
            discount_cents:   this.data.discount,
            shipping_price_cents: this.data.shipping_price,
            shipping_methods:  this.data.shipping_methods,
            fixed_description:  this.data.fixed_description,
            type_bank_slip:  this.data.type_paper,
            days_due_date:  this.data.days_due,
            late_payment_fine:  this.data.late_payment_fine,
            per_day_interest:  this.data.per_day_interest,
            items: this.data.items
        };

        const resp = await api.post('/transaction/create/', payment_data);
        return resp.data.create_request;

    }
}

module.exports = new PagHiper;
