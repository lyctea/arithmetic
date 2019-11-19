// interface Teacher {
//   teach(): void
// }
//
// interface Student {
//   learn(): void
// }
//
// function getPerson(): Teacher | Student {
//   return {} as Teacher
// }
//
// const person = getPerson()
//
// function isTeacher(person: Teacher | Student): person is Teacher {
//   return (<Teacher>person).teach() !== undefined
// }
//
// if (isTeacher(person)) {
//   person.teach()
// } else {
//   person.learn()
// }


function isNumber(padding: number | string): padding is number {
  return typeof padding === 'number'
}

function isString(x: number | string): x is string {
  return typeof x === 'string'
}

function padLeft(value: string, padding: number | string) {
  if (isNumber(padding)) {
    return Array(padding + 1).join(" ") + value
  }

  if (isString(padding)) {
    return padding + value
  }

  throw new Error(`Expected string or number, got '${padding}'`)
}

padLeft("hello world", 4)
