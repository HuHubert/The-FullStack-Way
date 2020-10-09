//let neme : type[] = initial;

let data: string[] = ["java", "Ruby", "Kotlin", "Dart"]
console.log(data)
// console.log(data[0])
// console.log(data[3])
// console.log(data[4])

data[4] = "PHP"

//追加賦值
console.log(data)
console.log(data[4])

//越界賦值

data[10] = "GO"
console.log(data)
