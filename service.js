const got = require('got')
var slice = require('lodash/slice')

const myuri = 'http://www.megamillions.com/Media/Static/winning-numbers/winning-numbers.json'

var service = {
    getNumbers: function() {
        return got(myuri, { json: true }).then(response => {
            console.log(response.body.url);
                return slice(response.body.numbersList, 0 ,6);
            }).catch(error => {
                console.log(error.response.body);
        });
    },
}


module.exports = service