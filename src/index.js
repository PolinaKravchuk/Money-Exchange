// PLEASE DON'T change function name
module.exports =
 function makeExchange(currency) {
	if(currency > 10000) {
		var obj = {};
		return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	} else if (currency == 0){
		return {};
	} else {
		var obj = {};
		var H = currency / 50;
		if ( H >= 1){
			H = Math.floor(H);
			obj.H = H;
		} else H = 0;

		var t = currency - H * 50;
		var Q = t / 25;

		if ( Q >= 1){
			Q = Math.floor(Q);
			obj.Q = Q;
		} else Q = 0;

		t = t - Q * 25;
		var D = t / 10;

		if ( D >= 1) {
			D = Math.floor(D);
			obj.D = D;
		} else D = 0;

		t = t - D * 10;
		var N = t / 5;

		if ( N >= 1 ) {
			N = Math.floor(N);
			obj.N = N;
		} else N = 0;	
		
		t = t - N * 5;
		var P = t / 1;

		if ( P >= 1 ) {
			P = Math.floor(P);
			obj.P = P;
		} else P = 0;	

	}

	return obj;
}

//console.log(makeExchange(90));