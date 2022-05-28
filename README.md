# a3pay-js
Javascript Library for a3Pay


## Installing

Using npm:

```bash
$ npm i a3pay-js
```

Using jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/a3pay-js@1.0.3/dist/a3pay.min.js"></script>
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/a3pay-js@1.0.3/dist/a3pay.min.js"></script>
```

## Usage
```js
//Payments Collection
//Ignite the Payment Collection Class Using Your a3Pay Account Taken
const token = 'w6gfpqde8a3u5lauu7r7xkfqhkinslvxrsybr0'; //To know more about tokens and how to get yours follow here (https://a3pay.co/docs/#access_token)
const payments = new a3_payments(token);

//Calling create_transaction
let amount = 1000;
let label = 'frgtyuy4';
let currency = 'USD';
let coin = 'BTC,USDT';
let success_url = 'https://my_domain.com/success_callback?id=456ytgre56';
let error_url = 'https://my_domain.com/error_callback?id=456ytgre56';
payments.create_transaction(amount, label, currency, coin, success_url, error_url, function(error, resp) {
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


//a3Marketa
//Ignite the a3marketa Class
const marketa = new a3_marketa();

//Calling Live data
marketa.live_data(function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//a3 Apps
//Ignite the a3apps Class Using Your a3Pay Account Taken
const token = 'w6gfpqde8a3u5lauu7r7xkfqhkinslvxrsybr0'; //To know more about tokens and how to get yours follow here (https://a3pay.co/docs/#access_token)
const apps = new a3_apps(token);

//Calling update_password
let oldpassword = 'test';
let newpassword = 'test123';
apps.update_password(oldpassword, newpassword, function(error, resp) {
    if(error) {
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
