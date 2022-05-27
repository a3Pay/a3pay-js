const marketa = new a3_marketa();

//Live data
marketa.live_data(function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});

//Get specific data
const target = 'USD';
const symbol = 'BTC';
const days = 1; //1 for live data
marketa.specific_data(target, symbol, days, function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//List Symbols
marketa.list_symbols(function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


// List Targets
marketa.list_targets(function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});
