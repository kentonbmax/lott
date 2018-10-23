const _ = require('lodash')
var service = require('./service')

var megaNumbers;
var whiteBallsUnique;
var numbers = []
var ranges = [{s: 1, m: 15}, {s: 16, m: 33}, {s: 'x', m: 50}]
this.megaNumbers = service.getNumbers().then( (data) => {
    this.megaNumbers = data;
    getWhiteNumbers(data)
    console.log(this.megaNumbers)
    numberGen()
    var ballz = genBallz()
    console.log(`ball picks: ${ballz[0]} or ${ballz[1]}`)
});

function numberGen() {
    for(var i = 0; i < 5; i++) {
        rules(i);
        console.log(`${i}:${numbers[i]}`)
    }
    
}

function rules(index) {
    if(index === 0) {
       numbers.push(inRangeNumGen(ranges[index], false))
    }

    if(index === 1) {
        numbers.push(inRangeNumGen(ranges[index], true))
    }

    if(index === 2) {
        let range = {s: numbers[index -1], m: 50}
        numbers.push(inRangeNumGen(range, false))
    }
}

function inRangeNumGen(range, oddMode) {
    let valid = false
    while(!valid) {
        let num = Math.round(Math.abs(Math.random() * Math.floor(range.m)))
        valid = (_.inRange(num, range.s, range.m) &&
                 (oddMode ? isEven(num) : isOdd(num)) &&
                 _.indexOf(this.whiteBallsUnique, num) <= 0 )

        if(valid) {
            return num;
        }
    }
}


function isEven(n) {
    return n % 2 == 0;
 }
 
 function isOdd(n) {
    return Math.abs(n % 2) == 1;
 }

 function getWhiteNumbers(collection) {
    var arr = _.flatten(collection)
    var values = []
    arr.forEach(element => {
        Object.keys(element).forEach(function(key) {
            if( key.indexOf('White') > -1) {
                values.push(element[key])
            }
        });
    });
    this.whiteBallsUnique = _.uniq(values)
 }

 function genBallz() {
     var ten = Math.round(Math.abs(Math.random() * Math.floor(10)))

     var rem = 0
    while(rem <= 10) {
        var rem = Math.round(Math.abs(Math.random() * Math.floor(25)))
    }
    return [ten, rem]
 }