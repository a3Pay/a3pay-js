//Ignite the Payment Collection Class Using Your a3Pay Account Taken
const mode = 'test'; // 'live' or 'test'
const token = 'w6gfpqde8a3u5lauu7r7xkfqhkinslvxrsybr0'; //To know more about tokens and how to get yours follow here (https://a3pay.co/docs/#access_token)
const payments = new a3_payments(token, mode);


//Calling get_tx_list
let limit = 3;
payments.get_tx_list(limit, function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling get_tx_info
let txid = 'w0ogbja0cfs7rp466';
payments.get_tx_info(txid, function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling create_transaction
let category = 'checkout'; // 'checkout' or 'donation'
let amount = 1000;
let label = 'frgtyuy4';
let currency = 'USD';
let coin = 'BTC,USDT';
let success_url = 'https://my_domain.com/success_callback?id=456ytgre56';
let error_url = 'https://my_domain.com/error_callback?id=456ytgre56';
payments.create_transaction(category, amount, label, currency, coin, success_url, error_url, function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});
//Calling create_transaction without callback urls
payments.create_transaction(amount, label, currency, coin, null, null, function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});
