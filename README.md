# a3pay-js
Javascript Library for a3Pay


## Installing

Using npm:

```bash
$ npm i a3pay-js
```

Using jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/a3pay-js@1.0.9/dist/a3pay.min.js"></script>
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/a3pay-js@1.0.9/dist/a3pay.min.js"></script>
```

Include from path:

```html
<script src="_path_to_/dist/a3pay.min.js"></script>
```

## Usage
```js
const mode = 'test'; // 'live' or 'test'
const token = 'w6gfpqde8a3u5lauu7r7xkfqhkinslvxrsybr0'; //To know more about tokens and how to get yours follow here (https://a3pay.co/docs/#access_token)

const btc_api_key = 'praoubf8d2e1584059489f8ffa3663b3223df2'; //For Bitcoin
const usdt_api_key = '9f8ffbf8d2e1584059489f8ffa3663b3223df2'; //For Tether USDT
const eth_api_key = '663b3bf8oubf8d4059489f8ffa3663b3205948'; //For Ethereum
//To know more about wallet api keys and how to get yours follow here (https://a3pay.co/docs/#api_key)


///////Using simple Javascript/////////////////////
const payments = new a3_payments(token, mode); //Payment Collection
const wallet = new a3_wallet(btc_api_key); //Wallets
const apps = new a3_apps(token); //a3Apps
const marketa = new a3_marketa(); //a3Marketa
///////Using simple Javascript/////////////////////



////////On NodeJs//////////////////////
const a3pay = require('a3pay-js');

const payments = new a3pay.a3_payments(token, mode); //Payment Collection
const wallet = new a3pay.a3_wallet(btc_api_key); //Wallets
const apps = new a3pay.a3_apps(token); //a3Apps
const marketa = new a3pay.a3_marketa(); //a3Marketa
///////On NodeJs//////////////////////

```


## Examples
```js
//Payments collection
//Calling create_transaction
let category = 'checkout'; // 'checkout' or 'donation'
let amount = 1000;
let label = 'frgtyuy4';
let currency = 'USD';
let coin = 'BTC,USDT';
//Calling create_transaction without callback urls
payments.create_transaction(category, amount, label, currency, coin, null, null, function(error, resp) {
    //Handle callback
    if(error) { console.log(error); } else { console.log(resp); }
});


//Wallet
//Calling get_new_address
let label = 'wsedrftgyh';
wallet.get_new_address(label, function(error, resp) {
    //Handle callback
    if(error) { console.log(error); } else { console.log(resp); }
});


//a3Marketa
//Calling Live data
marketa.live_data(function(error, resp) {
    //Handle callback
    if(error) { console.log(error); } else { console.log(resp); }
});


//a3 Apps
//Calling update_password
let oldpassword = 'test';
let newpassword = 'test123';
apps.update_password(oldpassword, newpassword, function(error, resp) {
    //Handle callback
    if(error) { console.log(error); } else { console.log(resp); }
});
```

Look to the scripts in the `/examples` directory in your browser for more examples.


## Contributing
If you encounter a bug or have a suggestion to help improve this liobrary for others, you are welcome to open a Github issue on this repository and it will be reviewed by our development team.


## License
MIT - see LICENSE

