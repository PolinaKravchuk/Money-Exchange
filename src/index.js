// PLEASE DON'T change function name
//module.exports = 
function makeExchange(currency) {
	if(currency > 10000) {
		return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	} else if (currency < 0){
		return {};
	} else {
		var H = currency / 50;
		if ( H >= 1){
			H = Math.floor(H);
			this.H = H;
		}

	}
}

makeExchange(10001);
