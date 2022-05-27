# a3pay-js
Javascript Library for a3Pay


## Installing

Using npm:

```bash
$ npm i a3pay-js
```

Using jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/a3pay-js@1.0.1/dist/a3pay.min.js"></script>
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/a3pay-js@1.0.1/dist/a3pay.min.js"></script>
```

## Usage
```js
//Payments Collection
const payments = new a3_payments('w6gfpqde8a3u5lauu7r7xkfqhkinslvxrsybr0');

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


//Wallet
const eth_api_key = '663b3bf8oubf8d4059489f8ffa3663b3205948'; // For Ethereum
const wallet = new a3_wallet(btc_api_key);

//get_new_address
const label = 'wsedrftgyh';
wallet.get_new_address(label, function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//a3 Apps
const apps = new a3_apps('w6gfpqde8a3u5lauu7r7xkfqhkinslvxrsybr0');

//get_account_info
apps.get_account_info(function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//a3Marketa
const marketa = new a3_marketa();

//Live data
marketa.live_data(function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});

```


## Examples
Look to the scripts in the `/examples` directory in your browser. You will have to change the api_key and token in the example files to your own.


## Contributing
If you encounter a bug or have a suggestion to help improve this liobrary for others, you are welcome to open a Github issue on this repository and it will be reviewed by our development team.


## License
MIT - see LICENSE.md
