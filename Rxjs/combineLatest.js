/**
 * combineLatest 就是将一个 observable 最后输出的值和现在的 observable 输出值连接起来
 */

var source = Rx.Observable.interval(500).take(4);
var source1 = Rx.Observable.interval(300).take(5);

var example = source.combineLatest(source1, (x, y) => x + y);

example.subscribe({
  next: (value) => { console.log(value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
});
