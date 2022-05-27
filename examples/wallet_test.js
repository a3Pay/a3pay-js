const btc_api_key = 'praoubf8d2e1584059489f8ffa3663b3223df2'; //For Bitcoin
const usdt_api_key = '9f8ffbf8d2e1584059489f8ffa3663b3223df2'; // For Tether USDT
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


//get_balance
wallet.get_balance(function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//get_my_addresses
wallet.get_my_addresses(5, function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//get_address_by_label
wallet.get_address_by_label('default', function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//get_network_fee_estimate
wallet.get_network_fee_estimate(function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//get_transactions
wallet.get_transactions(3, function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//get_transaction
const txid = '0xd89a37efdbe6f706224750c7cd33d8da0d5aa55b7f214465bf178b60f7699933';
wallet.get_transaction(txid, function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//send_to_address
const address = '0xd89a37efdbe6f706224750c7cd33d8da';
const amount = '0.2';
const from = '0xd89a37efdbe6f706224750c7cd33d8da';

wallet.send_to_address(address, amount, from, function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//set_tx_fee
const feerate = '0.0002';
wallet.set_tx_fee(feerate, function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//wallet_unlock
const duration = '300'; //In minutes
const passphrase = 'pass123';
wallet.wallet_unlock(passphrase, duration, function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//wallet_lock
wallet.wallet_lock(function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//passphrase_change
const oldpassphrase = 'pass';
const newpassphrase = 'pass123';
wallet.passphrase_change(oldpassphrase, newpassphrase, function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//dump_privkey
const address = '0xd89a37efdbe6f706224750c7cd33d8da';
wallet.dump_privkey(address, function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//abandon_transaction
const txid = '0xd89a37efdbe6f706224750c7cd33d8da0d5aa55b7f214465bf178b60f7699933';
wallet.abandon_transaction(txid, function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});
