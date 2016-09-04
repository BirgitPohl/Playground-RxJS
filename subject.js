/* Subject can do work for Observes and Obervables: It can subscribe to an Observer and it can produce values*/

var subject = new Rx.subject(); //error: is not a constructor
var source = Rx.Observable.interval(300)
	.map(function(v) {return 'Interval message #  ' + v;})
	.take(5);

source.subscribe(subject);

var subscription = subject.subscribe(
	function onNext(x) {console.log('onNext: ' + x);},
	function onError(e) {console.log('onError: ' + e.message);},
	function onCompleted() {console.log('onCompleted: ');}
);

//Subject ermits messages on its own
subject.onNext('Our message #1');
subject.onNext('Our message #2');
//and then the proxied messages.


//After one second, we call onCompleted and override .take(5)
setTimeout(function(){
	subject.onCompleted();
}, 1000);

