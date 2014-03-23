twitter-searchcount
===================

Count up the number of results for a Twitter search.

##Usage

```javascript
var sc = require('twitter-searchcount');

var creds = {
    consumer_key: process.env.NCAA_APP_KEY,
    consumer_secret: process.env.NCAA_APP_SECRET,
    access_token_key: process.env.NCAA_TOKEN,
    access_token_secret: process.env.NCAA_TOKEN_SECRET
};

var lastDate = new Date('2014/03/16');
sc(creds, "bracket win Florida", lastDate, function(result) {
    console.log(result + ' people think Florida will win');
});
```
