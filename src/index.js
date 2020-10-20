module.exports = function toReadable (number) {
    const massNumbers_1_19 = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const massNumbers_20_99 = [' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';
    if (number == 0) return 'zero';
    if (number < 20) return massNumbers_1_19[number];
    if (number < 100) {
         result += massNumbers_20_99[+number.toString().split('')[0]] + ' ' + massNumbers_1_19[+number.toString().split('')[1]];
         return result.trim();
    }
    result += massNumbers_1_19[+number.toString().split('')[0]] + ' hundred ';
    if (+number.toString().split('')[1] == 1) {
        result += massNumbers_1_19[+number.toString().split('')[2] + 10];
        return result.trim();
    }
    if (+number.toString().split('')[1] !== 0) {
        result += massNumbers_20_99[+number.toString().split('')[1]] + ' ' + massNumbers_1_19[+number.toString().split('')[2]];
        return result.trim();
    } else {
        result += massNumbers_1_19[+number.toString().split('')[2]];
        return result.trim();
    }
}
