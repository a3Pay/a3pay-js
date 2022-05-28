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


//Calling get_account_info
apps.get_account_info(function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling list_login_activity
apps.list_login_activity(function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling list_assets
apps.list_assets(function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling support_countries
apps.support_countries(function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling list_pricing
apps.list_pricing(function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//Calling support_currencies
apps.support_currencies(function(error, resp) {
    if(error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});
