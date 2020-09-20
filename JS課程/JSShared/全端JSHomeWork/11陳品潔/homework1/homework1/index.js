let table_rows = Array.from(document.getElementsByTagName("tr"));

for (let i = 0; i < table_rows.length; i++) {

    let columns = Array.from(table_rows[i].children)
    //console.log(columns); 是一個html collection
    for (let j = 0; j < columns.length; j++) {
        let result = (j + 2) * (i + 1)
        columns[j].innerText = `${j+2} * ${i+1} = ${result}`;
    }

}



// function f() {
//     var magic = 312
//     console.log(magic)
// }


// function a() {
//     var magic 
// }

// console.log(a)



// document {
//  dom options
// }

// window{

// browser options
// }


