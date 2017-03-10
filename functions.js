module.exports = {
    processParam: function(date, fn) {

        var input = new Date(date);
        
        if (input.toDateString() != "Invalid Date") {
            var result = {
                "unix":     input.getTime(),
                "natural":  input.toDateString()
            };
        } else {
            var result = {
                "unix":     null,
                "natural":  null
            };
        }
        return fn(result);
    } 
};

