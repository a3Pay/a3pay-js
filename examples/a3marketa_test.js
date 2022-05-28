//Ignite the a3marketa Class
const marketa = new a3_marketa();


//Calling Live data
marketa.live_data(function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling Get specific data
let target = 'USD';
let symbol = 'BTC';
let days = 1; //1 for live data
marketa.specific_data(target, symbol, days, function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling List Symbols
marketa.list_symbols(function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling List Targets
marketa.list_targets(function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});
