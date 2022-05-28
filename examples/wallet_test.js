//Ignite the a3apps Class Using Your a3Pay Account Taken
const btc_api_key = 'praoubf8d2e1584059489f8ffa3663b3223df2'; //For Bitcoin
const usdt_api_key = '9f8ffbf8d2e1584059489f8ffa3663b3223df2'; //For Tether USDT
const eth_api_key = '663b3bf8oubf8d4059489f8ffa3663b3205948'; //For Ethereum
//To know more about wallet api keys and how to get yours follow here (https://a3pay.co/docs/#api_key)
const wallet = new a3_wallet(btc_api_key);


//Calling get_new_address
let label = 'wsedrftgyh';
wallet.get_new_address(label, function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling get_balance
wallet.get_balance(function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling get_my_addresses
let limit = 5;
wallet.get_my_addresses(limit, function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling get_address_by_label
let label 'default';
wallet.get_address_by_label(label, function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling get_address_balance
let address = '0x004E63486BE595EdD45f6CC6418718b2B598E9AB';
wallet.get_address_balance(address, function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});

//Calling get_network_fee_estimate
wallet.get_network_fee_estimate(function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling get_transactions
let limit = 3;
wallet.get_transactions(limit, function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling get_transaction
let txid = '0xd89a37efdbe6f706224750c7cd33d8da0d5aa55b7f214465bf178b60f7699933';
wallet.get_transaction(txid, function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling send_to_address
let address = '0xd89a37efdbe6f706224750c7cd33d8da';
let amount = '0.2';
let from = '0xd89a37efdbe6f706224750c7cd33d8da';

wallet.send_to_address(address, amount, from, function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});
//Calling send_to_address without 'from' address
wallet.send_to_address(address, amount, null, function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling set_tx_fee
let feerate = '0.0002';
wallet.set_tx_fee(feerate, function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling wallet_unlock
let duration = '300'; //In minutes
let passphrase = 'pass123';
wallet.wallet_unlock(passphrase, duration, function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling wallet_lock
wallet.wallet_lock(function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling passphrase_change
let oldpassphrase = 'pass';
let newpassphrase = 'pass123';
wallet.passphrase_change(oldpassphrase, newpassphrase, function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling dump_privkey
let address = '0xd89a37efdbe6f706224750c7cd33d8da';
wallet.dump_privkey(address, function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling abandon_transaction
let txid = '0xd89a37efdbe6f706224750c7cd33d8da0d5aa55b7f214465bf178b60f7699933';
wallet.abandon_transaction(txid, function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});
