// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    o = {};
 	let H = 0;
    let Q = 0;
    let D = 0;
    let N = 0;
    let P = 0;
    if (currency <= 0) return o;
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
       while (currency / 50 >= 1) {
    		H++;
    		currency-=50;
    	}

    	while (currency / 25 >= 1) {
    		Q++;
    		currency-=25;
    	}

    	while (currency / 10 >= 1) {
    		D++;
    		currency-=10;
    	}

    	while (currency / 5 >= 1) {
    		N++;
    		currency-=5;
    	}

    	while (currency / 1 >= 1) {
    		P++;
    		currency-=1;
    	}
    		if (H > 0) o.H = H;
    		if (Q > 0) o.Q = Q;
    		if (D > 0) o.D = D;
    		if (N > 0) o.N = N;
    		if (P > 0) o.P = P;
    	return o;
}


	