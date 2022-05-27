# a3pay-js
Javascript Library for a3Pay


## Requirements
 * npm - [npmjs.com](https://npmjs.com/)


## Installation
To install with npm run the following command

    npn install a3pay



## Usage
```js
//TEST
var payments = new a3_payments('w6gfpqde8a3u5lauu7r7xkfqhkinslvxrsybr0');

payments.get_tx_list(3, function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


payments.get_tx_info('w0ogbja0cfs7rp466', function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});

var amount = 1000;
var label = 'frgtyuy4';
var currency = 'USD';
var coin = 'BTC,USDT';
var success_url = 'https://my_domain.com/success_callback?id=456ytgre56';
var error_url = 'https://my_domain.com/error_callback?id=456ytgre56';
payments.create_transaction(amount, label, currency, coin, success_url, error_url, function(error, resp) {
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
