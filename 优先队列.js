/**
 * 优先队列： 元素的添加和移除是有优先级的。
 * 例如机场的等级顺序，头等舱和商务舱的优先级要高于经济舱。
 * 再例如，医院会优先处理病情比较严重的患者。
 *
 * 实现一个优先队列，有两种选择：设置游戏优先级，然后在正确位置添加元素。或者用入列操作添加元素，然后按照优先级移除他们。本例子使用第一种。
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//完整的Queue类
var Queue = (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (element) {
        this.items.push(element);
    };
    Queue.prototype.deququq = function () {
        return this.items.shift();
    };
    Queue.prototype.front = function () {
        return this.items[0];
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length == 0;
    };
    Queue.prototype.clear = function () {
        this.items = [];
    };
    Queue.prototype.size = function () {
        return this.items.length;
    };
    Queue.prototype.print = function () {
        console.log(this.items.toString());
    };
    return Queue;
}());
var PriorityQueue = (function (_super) {
    __extends(PriorityQueue, _super);
    function PriorityQueue() {
        var _this = _super.call(this) || this;
        _this.queueObj = {
            element: '',
            priority: ''
        };
        _this.queue = new Queue();
        return _this;
    }
    PriorityQueue.prototype.createQueueObj = function (element, priority) {
        this.queueObj = {
            element: element,
            priority: priority
        };
    };
    PriorityQueue.prototype.prienqueue = function (element, priority) {
        this.createQueueObj(element, priority);
        var added = false;
        if (this.queue.isEmpty()) {
            this.queue.enqueue(this.queueObj);
        }
        else {
            for (var i = 0; i < this.queue.size(); i++) {
                if (this.queueObj.priority < this.queue.items[i].priority) {
                    this.queue.items.splice(i, 0, this.queueObj);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.queue.enqueue(this.queueObj);
            }
        }
    };
    return PriorityQueue;
}(Queue));
var priorityQueue = new PriorityQueue();
priorityQueue.prienqueue('jack', 1);
priorityQueue.prienqueue('joson', 3);
priorityQueue.prienqueue('deva', 2);
priorityQueue.prienqueue('bulin', 4);
priorityQueue.print();
