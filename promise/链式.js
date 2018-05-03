function taskA() {
    console.log('Task A')
    throw new Error('throw Error @ TASK A')
}
function taskB() {
    console.log('Task B')
}

function onRejected(error) {
    console.log('Catch Error: A or B', error)
}

function finalTask() {
    console.log('Final Task')
}

var pormise = Promise.resolve()

pormise
    .then(taskA)
    .then(taskB)
    .catch(onRejected)
    .then(finalTask)
