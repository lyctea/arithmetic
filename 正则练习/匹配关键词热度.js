function processData(input) {
    var input = input.split('\n')
    var n = input[0]
    var data = input.slice(1, n+1)
    var result = data.map(findHackerrank).join('\n')
    console.log(result)
} 

function findHackerrank(str) {
    var atStartRE = /^hackerrank/
    var atEndRE = /hackerrank$/
    var output = -1
    
    if(atStartRE.test(str) && atEndRE.test(str)) {
        output = 0
        return output
    }
    if(atStartRE.test(str)) {
        output = 1
        return output
    }
    if(atEndRE.test(str)) {
        output = 2
        return output
    }
    
    return output
}

var input = `4
i love hackerrank
hackerrank is an awesome place for programmers
hackerrank
i think hackerrank is a great place to hangout`

processData(input)