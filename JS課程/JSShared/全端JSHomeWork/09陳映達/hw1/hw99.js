var  table1 = document.getElementById("table1");
var sum = 0;

var content = "";

for(var i = 1;i<10;i++)
{
    console.log("aaaa");
    content+="<tr>";
    //table1.innerHTML += "<tr><td> " +i +"</td></tr>";
    for(var j=2;j<10;j++)
    {
        sum = i*j;
        content += "<td> " + j + "*" + i +"="+ sum  +"</td>";
        
    }
    
    content+="</tr>";
        
    //table1.innerHTML += "<br>";
    
}

table1.innerHTML = content;