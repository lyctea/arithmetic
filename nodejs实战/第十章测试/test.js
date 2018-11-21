var assert = require('assert');
var Todo = require('./todo');
var todo = new Todo();

var testsCompleted = 0;

function deleteTest () {
  todo.add('Delete Me');
  assert.strictEqual(todo.getCount(), 1, '1 item should exitst');
  todo.deleteAll();
  assert.strictEqual(todo.getCount(), 0, 'No items should exist');
  testsCompleted++;
}

function addTest () {
  todo.deleteAll();
  todo.add('Added');
  assert.strictEqual(todo.getCount(), 1, '1 item should exist');
  testsCompleted++;
}

function doAsyncTest (cb) {
  todo.doAsync(function (value) {
    assert.ok(value, 'Callback should be passed true');
    testsCompleted++;
    cb();
  });
}

function throwsTest (cb) {
  assert.throws(todo.add, /requires/);
  testsCompleted++;
}

deleteTest();
addTest();
throwsTest();
doAsyncTest(function () {
  console.log('Complate ' + testsCompleted + ' tests');
});
