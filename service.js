const got = require('got')
var slice = require('lodash/slice')

const myuri = 'https://www.megamillions.com/cmspages/utilservice.asmx/GetDrawingPagingData'

var service = {
    getNumbers: function() {
        return got(myuri,{"pageSize":20,"startDate":"08/01/2017","endDate":"03/25/2020","pageNumber":1}).then(response => {
            console.log(response.body.url);
                return slice(response.body.numbersList, 0 ,6);
            }).catch(error => {
                console.log(error.response.body);
        });
    },
}


module.exports = service