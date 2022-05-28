class FetchHttpHandler {
    constructor() {
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow',
            cache: "no-store"
        };
        this.requestOptions_nocache = {
            method: 'GET',
            redirect: 'follow'
        };
    }
    send(request, callback, _cache) {
        try {
            if(_cache == 'no-cache') {
                var reqOpt = this.requestOptions_nocache;
            } else {
                var reqOpt = this.requestOptions;
            }
            fetch("https://a3pay.co/" + request, reqOpt)
                .then(response => response.json())
                .then(result => {
                    callback(null, result);
                })
                .catch(error => {
                    callback(String(error), null);
                });
        } catch (e) {
            callback(e, null);
        }
    }
}
class a3_payments {
    constructor(token) {
        this.endpoint = 'payments/';
        this.token = token;
        this.httpClient = new FetchHttpHandler();
    }
    create_transaction(amt, lb, cur, coin, su_call, err_call, callback) {
        if(su_call) {
            const request = this.endpoint + 'create_transaction/?token=' + this.token + '&amount=' + amt + '&label=' + lb + '&currency=' + cur + '&coin=' + coin + '&success_callback=' + su_call + '&error_callback=' + err_call;
        } else {
            const request = this.endpoint + 'create_transaction/?token=' + this.token + '&amount=' + amt + '&label=' + lb + '&currency=' + cur + '&coin=' + coin;
        }
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'no-cache');
    }
    get_tx_info(txid, callback) {
        const request = this.endpoint + 'get_tx_info/' + this.token + '/' + txid;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'cache');
    }
    get_tx_list(limit, callback) {
        const request = this.endpoint + 'get_tx_list/' + this.token + '/' + limit;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'no-cache');
    }
}
class a3_marketa {
    constructor() {
        this.endpoint = 'marketa/';
        this.httpClient = new FetchHttpHandler();
    }
    live_data(callback) {
        const request = this.endpoint + 'live_data';
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'cache');
    }
    specific_data(target, symbol, option, callback) {
        const request = this.endpoint + 'specific_data/?target=' + target + '&symbol=' + symbol + '&option=' + option;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'cache');
    }
    list_symbols(callback) {
        const request = this.endpoint + 'list_symbols';
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'cache');
    }
    list_targets(callback) {
        const request = this.endpoint + 'list_targets';
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'cache');
    }
}

class a3_apps {
    constructor(token) {
        this.endpoint = 'account/';
        this.token = token;
        this.httpClient = new FetchHttpHandler();
    }
    update_password(password, newpassword, callback) {
        const request = this.endpoint + 'update_password/?token=' + this.token + '&password=' + password + '&newPassword=' + newpassword;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'cache');
    }
    get_account_info(callback) {
        const request = this.endpoint + 'get_account_info/?token=' + this.token;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'cache');
    }
    list_login_activity(callback) {
        const request = this.endpoint + 'list_login_activity/?token=' + this.token;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'cache');

    }
    list_assets(callback) {
        const request = this.endpoint + 'list_assets/?token=' + this.token;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'cache');

    }
    support_countries(callback) {
        const request = this.endpoint + 'support_countries/?token=' + this.token;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'cache');

    }
    list_pricing(callback) {
        const request = this.endpoint + 'list_pricing/?token=' + this.token;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'cache');

    }
    support_currencies(callback) {
        const request = this.endpoint + 'support_currencies/?token=' + this.token;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'cache');

    }
}

class a3_wallet {
    constructor(api_key) {
        this.api_key = api_key;
        this.httpClient = new FetchHttpHandler();
    }
    get_new_address(label, callback) {
        const request = 'get_new_address/?api_key=' + this.api_key + '&label=' + label;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data.address);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'cache');
    }
    get_balance(callback) {
        const request = 'get_balance/?api_key=' + this.api_key;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data.avaliable_balance);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'no-cache');
    }
    get_my_addresses(limit, callback) {
        const request = 'get_my_addresses/?api_key=' + this.api_key + '&limit=' + limit;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data.addresses);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'cache');
    }
    get_address_by_label(label, callback) {
        const request = 'get_address_by_label/?api_key=' + this.api_key + '&label=' + label;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data.address);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'no-cache');
    }
    get_address_balance(address, callback) {
        const request = 'get_address_balance/?api_key=' + this.api_key + '&address=' + address;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data.final_balance);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'no-cache');
    }
    get_network_fee_estimate(callback) {
        const request = 'get_network_fee_estimate/?api_key=' + this.api_key;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data.feerate);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'cache');
    }
    get_transaction(txid, callback) {
        const request = 'get_transaction/?api_key=' + this.api_key + '&txid=' + txid;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data.tx);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'cache');
    }
    send_to_address(address, amount, from, callback) {
        if(from) {
            const request = 'send_to_address/?api_key=' + this.api_key + '&address=' + address + '&amount=' + amount + '&from=' + from;
        } else {
            const request = 'send_to_address/?api_key=' + this.api_key + '&address=' + address + '&amount=' + amount;
        }
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data.txId);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'no-cache');
    }
    set_tx_fee(feerate, callback) {
        const request = 'set_tx_fee/?api_key=' + this.api_key + '&feerate=' + feerate;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data.message);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'cache');
    }
    wallet_unlock(passphrase, duration, callback) {
        const request = 'wallet_unlock/?api_key=' + this.api_key + '&passphrase=' + passphrase + '&duration=' + duration;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data.message);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'cache');
    }
    wallet_lock(callback) {
        const request = 'wallet_lock/?api_key=' + this.api_key;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data.message);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'cache');
    }
    passphrase_change(oldpassphrase, newpassphrase, callback) {
        const request = 'passphrase_change/?api_key=' + this.api_key + '&oldpassphrase=' + oldpassphrase + '&newpassphrase=' + newpassphrase;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data.message);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'no-cache');
    }
    dump_privkey(address, callback) {
        const request = 'dump_privkey/?api_key=' + this.api_key + '&address=' + address;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, resp.data.privkey);
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'no-cache');
    }
    abandon_transaction(txid, callback) {
        const request = 'abandon_transaction/?api_key=' + this.api_key + '&txid=' + txid;
        this.httpClient.send(request, function(err, resp) {
            if(resp.status == 'ok') {
                callback(null, 'Transaction Canceled');
            } else {
                callback('Failed: ' + resp.message, null);
            }
        }, 'cache');
    }
}
