const payments = new a3_payments('w6gfpqde8a3u5lauu7r7xkfqhkinslvxrsybr0');

//get_tx_list
payments.get_tx_list(3, function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//get_tx_info
payments.get_tx_info('w0ogbja0cfs7rp466', function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//create_transaction
const amount = 1000;
const label = 'frgtyuy4';
const currency = 'USD';
const coin = 'BTC,USDT';
const success_url = 'https://my_domain.com/success_callback?id=456ytgre56';
const error_url = 'https://my_domain.com/error_callback?id=456ytgre56';

payments.create_transaction(amount, label, currency, coin, success_url, error_url, function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});

//without callbacks
payments.create_transaction(amount, label, currency, coin, null, null, function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});
