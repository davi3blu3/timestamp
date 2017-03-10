module.exports = {
    processParam: function(date, fn) {
        console.log('date from functions.js', date);
        var results = "Test is Returned!"
        return fn(results);
    } 
};

