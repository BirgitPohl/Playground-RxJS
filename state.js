//var eventTicks = 0;

function updateDistance(acc, i) {
	if (i % 2 == 0) {
		acc += 1;
	}
	return acc;
}


var ticker1 = Rx.Observable
	.interval(2000)

var ticker2 = Rx.Observable
	.interval(1000)
	.scan(updateDistance)  //avoids external state, what .map would do

Rx.Observable.merge(ticker1, ticker2).subscribe(function(eventTicks) {
	console.log('Subscriber 1' + eventTicks + 'so far');
})

//Bruteforce n^2

// tickObservable.subscribe(function(eventTicks) {
// 	console.log('Subscriber 1' + eventTicks + 'so far');
// })

// tickObservable.subscribe(function(eventTicks) {
// 	console.log('Subscriber 2' + eventTicks + 'so far');
// })