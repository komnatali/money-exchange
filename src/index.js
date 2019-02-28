module.exports = function makeExchange(currency) {
    var exchange = {};
    var exchangeLetters = {};
    var coins = [50, 25, 10, 5, 1]
    if (currency <= 0) return {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    coins.forEach(function(item, i, coins) {
        if (currency / item >= 1){
            exchange[item] = Math.floor(currency / item);
            currency = currency - Math.floor(currency / item) * item;
        }
    });
    for (var i in exchange){
        if (i==50) exchangeLetters['H'] = exchange[i];
        if (i==25) exchangeLetters['Q'] = exchange[i];
        if (i==10) exchangeLetters['D'] = exchange[i];
        if (i==5) exchangeLetters['N'] = exchange[i];
        if (i==1) exchangeLetters['P'] = exchange[i];
    }
    return exchangeLetters;
};