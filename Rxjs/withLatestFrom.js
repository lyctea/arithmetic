/*
* 同combineLatest，但是有主从关系，只有当main有值的时候才发生回调
* */

var main = Rx.Observable.from('hello').zip(Rx.Observable.interval(500), (x, y) => x);
var some = Rx.Observable.from([0,1,0,0,0,1]).zip(Rx.Observable.interval(300), (x, y) => x);

var example = main.withLatestFrom(some, (x, y) => {
  return y === 1 ? x.toUpperCase() : x;
});

example.subscribe({
  next: (value) => { console.log(value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
});
