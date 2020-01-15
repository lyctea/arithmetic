var Waiter = function () {
  var dfd = [],
    doneArr = [],
    failArr = [],
    slice = Array.prototype.slice,
    that = this

  var Primise = function () {
    this.resolve = false
    this.reject = false
  }

  Primise.prototype = {
    resolve: function () {

    },
    reject: function () {

    }
  }

  that.Defered = function () {
    return new Primise()
  }

  function _exec(arr) {

  }

  that.when = function () {

  }

  that.done = function () {

  }

  that.fail = function () {

  }
}
