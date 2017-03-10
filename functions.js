module.exports = {
    
    formatNumStr: function(date) {
      if (typeof date === "string") {
        for (var i = 0; i < date.length; i++) {
          if (isNaN( parseInt(date[i]))) {
            return date;
          }
        }
      }
      return parseInt(date);
    },
    
    processParam: function(date, fn) {
        var d         = this.formatNumStr(date),
            input     = new Date(d),
            unix      = input.getTime(),
            month     = input.toLocaleString("en-us", { month: "long" }),
            day       = input.getDate(),
            year      = input.getFullYear(),
            formatted = month + " " + day + ", " + year,
            result    = {};
        
        if (month === "Invalid Date") {
            result = {
                "unix":     null,
                "natural":  null                
            };
        } else {
            result = {
                "unix":     unix,
                "natural":  formatted                
            };
        }
        return fn(result);
    } 
};






function runDate (date) {
  var d = formatNumStr(date);
  d = new Date(d);

  var objDate   = new Date(d),
    locale    = "en-us",
    month     = objDate.toLocaleString(locale, { month: "long" }),
    day       = objDate.getDate(),
    year      = objDate.getFullYear(),
    formatted = month + " " + day + ", " + year;

  if (month === "Invalid Date") console.log("null, fool");
  else console.log(formatted);
}