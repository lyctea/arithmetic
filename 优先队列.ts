/**
 * 优先队列： 元素的添加和移除是有优先级的。
 * 例如机场的等级顺序，头等舱和商务舱的优先级要高于经济舱。
 * 再例如，医院会优先处理病情比较严重的患者。
 * 
 * 实现一个优先队列，有两种选择：设置游戏优先级，然后在正确位置添加元素。或者用入列操作添加元素，然后按照优先级移除他们。本例子使用第一种。
 */

//完整的Queue类
class Queue {
    public items: Array<string> = []

    public enqueue(element: any): void {
        this.items.push(element)
    }

    public deququq(): any {
        return this.items.shift()
    }

    public front(): any {
        return this.items[0]
    }

    public isEmpty(): boolean {
        return this.items.length == 0
    }

    public clear(): void {
        this.items = []
    }

    public size(): number {
        return this.items.length
    }

    public print(): void {
        console.log(this.items.toString())
    }
}

class PriorityQueue extends Queue{

    private queue: Queue
    private queueObj: any = {
        element: '',
        priority: ''
    }

    constructor() {
        super()
        this.queue = new Queue()
    }

    private createQueueObj(element: any, priority: number): void {
        this.queueObj =  {
            element: element,
            priority: priority
        }
    }

    public prienqueue(element: any, priority: number): void {
        this.createQueueObj(element, priority).
        let added: boolean = false

        if (this.queue.isEmpty()) {
            this.queue.enqueue(this.queueObj)
        } else {
            for (let i = 0; i < this.queue.size(); i++) {
                if (this.queueObj.priority < this.queue.items[i].priority) {
                    this.queue.items.splice(i,0,this.queueObj)
                    added = true
                    break
                }
            }
            if(!added){
                this.queue.enqueue(this.queueObj)
            }
        }
    }
}

let priorityQueue = new PriorityQueue()
priorityQueue.prienqueue('jack', 1)
priorityQueue.prienqueue('joson', 3)
priorityQueue.prienqueue('deva', 2)
priorityQueue.prienqueue('bulin', 4)

priorityQueue.print()