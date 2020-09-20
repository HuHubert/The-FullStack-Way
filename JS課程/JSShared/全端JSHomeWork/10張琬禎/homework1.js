// function multiply1(){
//     str1 = "";
//     for(i = 2; i < 10 ; i++){
//         for(j = 1; j <= 1; j++){

//             var toMult1 = '<td>'+ i + " x " + j + " = " + i * j + '</td>';
//             str1+=toMult1;
//         }
//       }
//       document.getElementById("main1").innerHTML = str1;
//     }   
// function multiply2(){
//     str2 = "";
//     for(i = 2; i < 10 ; i++){
//         for(j = 2; j <= 2; j++){

//             var toMult2 = '<td>'+ i + " x " + j + " = " + i * j + '</td>';
//             str2+=toMult2;
//         }
//         }
//         document.getElementById("main2").innerHTML = str2;
//     } 
// function multiply3(){
//     str3 = "";
//     for(i = 2; i < 10 ; i++){
//         for(j = 3; j <= 3; j++){

//             var toMult3 = '<td>'+ i + " x " + j + " = " + i * j + '</td>';
//             str3+=toMult3;
//         }
//         }
//         document.getElementById("main3").innerHTML = str3;
//     } 
// function multiply4(){
//     str4 = "";
//     for(i = 2; i < 10 ; i++){
//         for(j = 4; j <= 4; j++){

//             var toMult4 = '<td>'+ i + " x " + j + " = " + i * j + '</td>';
//             str4+=toMult4;
//         }
//         }
//         document.getElementById("main4").innerHTML = str4;
//     }
// function multiply5(){
//     str5 = "";
//     for(i = 2; i < 10 ; i++){
//         for(j = 5; j <= 5; j++){

//             var toMult5 = '<td>'+ i + " x " + j + " = " + i * j + '</td>';
//             str5+=toMult5;
//         }
//         }
//         document.getElementById("main5").innerHTML = str5;
//     }
// function multiply6(){
//     str6 = "";
//     for(i = 2; i < 10 ; i++){
//         for(j = 6; j <= 6; j++){

//             var toMult6 = '<td>'+ i + " x " + j + " = " + i * j + '</td>';
//             str6+=toMult6;
//         }
//         }
//         document.getElementById("main6").innerHTML = str6;
//     }
// function multiply7(){
//     str7 = "";
//     for(i = 2; i < 10 ; i++){
//         for(j = 7; j <= 7; j++){

//             var toMult7 = '<td>'+ i + " x " + j + " = " + i * j + '</td>';
//             str7+=toMult7;
//         }
//         }
//         document.getElementById("main7").innerHTML = str7;
//     }
// function multiply8(){
//     str8 = "";
//     for(i = 2; i < 10 ; i++){
//         for(j = 8; j <= 8; j++){

//             var toMult8 = '<td>'+ i + " x " + j + " = " + i * j + '</td>';
//             str8+=toMult8;
//         }
//         }
//         document.getElementById("main8").innerHTML = str8;
//     }
// function multiply9(){
//     str9 = "";
//     for(i = 2; i < 10 ; i++){
//         for(j = 9; j <= 9; j++){

//             var toMult9 = '<td>'+ i + " x " + j + " = " + i * j + '</td>';
//             str9+=toMult9;
//         }
//         }
//         document.getElementById("main9").innerHTML = str9;
//     }

    // multiply1();
    // multiply2();
    // multiply3();
    // multiply4();
    // multiply5();
    // multiply6();
    // multiply7();
    // multiply8();
    // multiply9();

function init() {
    var table = document.querySelector('table');
 
    for(var i = 1; i <= 9; i++) {
        var tr = document.createElement('tr');
            for(var j = 2; j <= 9 ; j++) {
            var td = document.createElement('td');
            td.innerHTML = j + '*' + i + '=' + j * i;
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
}
init();