const apps = new a3_apps('w6gfpqde8a3u5lauu7r7xkfqhkinslvxrsybr0');


//update_password
const oldpassword = 'test';
const newpassword = 'test123';
apps.update_password(oldpassword, newpassword, function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//get_account_info
apps.get_account_info(function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//list_login_activity
apps.list_login_activity(function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//list_assets
apps.list_assets(function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//support_countries
apps.support_countries(function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//list_pricing
apps.list_pricing(function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});


//support_currencies
apps.support_currencies(function(error, resp) {
    if (error) {
        console.log(error);
    } else {
        console.log(resp);
    }
});
