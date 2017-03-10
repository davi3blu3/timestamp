module.exports = {
    processParam: function(date, fn) {

        var input = new Date(date);
        
        var result = {
            "unix":     input.getTime(),
            "natural":  input.toDateString()
        };

        return fn(result);
    } 
};

