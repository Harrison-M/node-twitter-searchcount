var Twitter = require('twitter');

module.exports = function(creds, query, after, cb) {
    var tapi = new Twitter(creds);
    (function runSearch(count, next) {
        tapi.search(query, {
            count: 100,
            result_type: 'recent',
            max_id: next
        }, function(data) {
            console.log(data);
            var tweets = data.statuses.filter(function(t) {
                return Date.parse(t.created_at) > after.getTime();
            });
            if(tweets.length === 100) {
                count += 100;
                runSearch(count, data.statuses[99].id - 1);
            }
            else {
                cb(count + tweets.length);
            }
        });
    })(0);
}
