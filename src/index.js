// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency<=0) {
        return {};
    }
    if (currency>=10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    const currencyConfig = {"H":50,"Q":25,"D":10,"N":5,"P":1};
    let result = {};
    let currencyValue = currency;
    for (currencyType in currencyConfig) {
        if(currencyValue===0){
            break;
        }

        let currencyNominal = currencyConfig[currencyType];
        let currentValue=Math.trunc(currencyValue/currencyNominal);
        if(!currentValue){
            continue;
        }
        result[currencyType]=currentValue;
        currencyValue%=currencyNominal;
    }
    return result;
};
