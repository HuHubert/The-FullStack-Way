

function checknamevalue() {
    var namevalue = document.getElementById("name1").value;
    var checkvalue = document.getElementById("checkvalue");
    var reg = /^[\u4E00-\u9FA5]+$/;
    var img = document.createElement("img");
    var span = document.createElement("span");
    checkvalue.innerHTML = "";
    if (namevalue != "" && namevalue.length >= 2 && reg.test(namevalue)) {
        img.setAttribute("id", "imgcheck");
        img.src = "img/right.png";
        img.style = 'width:20px';
        checkvalue.appendChild(img);
        span.setAttribute("id", "checknametext");
        span.innerHTML = "格式正確";
        checkvalue.appendChild(span);

    }
    else {
        img.setAttribute("id", "imgcheckpwd");
        img.src = "img/error.jpg";
        img.style = 'width:20px';
        checkvalue.appendChild(img);
        span.setAttribute("id", "checknametext");
        span.innerHTML = "格式不符合";
        checkvalue.appendChild(span);
    }
}

function checkpwdvalue() {
    var pwdvalue = document.getElementById("pwd").value;
    var checkpwdvalue = document.getElementById("checkpwdvalue");
    //var reg = /^.*(?=.{6,16})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.[!@#$%^&*?])+$/;
    var reg = /^[\w]{6,16}$/i;//判断密码格式是否正确
    var reg1 = /[a-zA-Z]/;//字母
    var reg2 = /\d/;//数字
    var reg3 = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？ ]");

    var img = document.createElement("img");
    var span = document.createElement("span");
    checkpwdvalue.innerHTML = "";
    if (reg1.test(pwdvalue) && pwdvalue.length >= 6 && reg2.test(pwdvalue) && reg3.test(pwdvalue)) {
        img.setAttribute("id", "imgcheckpwd");
        img.src = "img/right.png";
        img.style = 'width:20px';
        checkpwdvalue.appendChild(img);
        span.setAttribute("id", "checkpwdtext");
        span.innerHTML = "格式正確";
        checkpwdvalue.appendChild(span);
    }
    else {
        img.setAttribute("id", "imgcheckpwd");
        img.src = "img/error.jpg";
        img.style = 'width:20px';
        checkpwdvalue.appendChild(img);
        span.setAttribute("id", "checkpwdtext");
        span.innerHTML = "格式不符合";
        checkpwdvalue.appendChild(span);
    }
}

function checkdate() {

    var datevalue = document.getElementById("date").value;
    var checkdatevalue = document.getElementById("checkdatevalue");
    //important 正則 日期正確格式
    var reg = new RegExp("^([0-9]{4})[./]{1}([0-9]{1,2})[./]{1}([0-9]{1,2})$");
    var strDataValue;
    var infoValidation = true;
    var strDataValue = reg.exec(datevalue)
    var d = new Date();
    var theyear = d.getFullYear();
    var themonth = d.getMonth() + 1;
    //var theday = d.getDate();

    //exec 將2019/10/23 分出陣列([0] 2019/10/23  [1] 2019 [2] 10 [3] 23)
    if ((strDataValue = reg.exec(datevalue)) != null) {
        
        var i;
        i = parseFloat(strDataValue[1]);
        if (i <= 0 || i > theyear) { // 年
            infoValidation = false;
        }
        i = parseFloat(strDataValue[2]);
        if (i <= 0 || i > themonth) { // 月

            infoValidation = false;
        }
        i = parseFloat(strDataValue[3]);
        if (strDataValue[2] == "01" || strDataValue[2] == "03" || strDataValue[2] == "05" || strDataValue[2] == "07" || strDataValue[2] == "08" || strDataValue[2] == "10" || strDataValue[2] == "12") {
            
            if (i > 0 && i <= 31) { // 日

                infoValidation = true;
            }
            else infoValidation = false;
        }
        if (strDataValue[2] == "04" || strDataValue[2] == "06" || strDataValue[2] == "9" || strDataValue[2] == "11") {
           
            if (i > 0 && i <= 30) { // 日 
                infoValidation = true;
            }
            else infoValidation = false;
        }
        if (strDataValue[2] == "02" || strDataValue[2] == "2") 
        {
            if (((strDataValue[1] % 4 == 0) && strDataValue[1] % 100 != 0) || strDataValue[1] % 400 == 0) {
                
                if (i > 0 && i <= 29) { // 日
                    console.log("ddddd");
                    infoValidation = true;
                }
                else infoValidation = false;
            }
            else{
                if (i > 0 && i <= 28) { // 日
                    
                    infoValidation = true;
                }
                else infoValidation = false;
            }

        }
    }
    else {
            infoValidation = false;
        }
    var img = document.createElement("img");
    var span = document.createElement("span");
    checkdatevalue.innerHTML = "";
    if (infoValidation == true) {
            
            img.setAttribute("id", "imgcheckdate");
            img.src = "img/right.png";
            img.style = 'width:20px';
            checkdatevalue.appendChild(img);
            span.setAttribute("id", "checkdatetext")
            span.innerHTML = "格式正確";
            checkdatevalue.appendChild(span);

    }
    else {
            img.setAttribute("id", "imgcheckdate");
            img.src = "img/error.jpg";
            img.style = 'width:20px';
            checkdatevalue.appendChild(img);
            span.setAttribute("id", "checkdatetext")
            span.innerHTML = "格式不符合";
            checkdatevalue.appendChild(span);
     }

   
}
    function checkall() {
        var checkdate = document.getElementById("checkdatetext").innerHTML;
        var checkname = document.getElementById("checknametext").innerHTML;
        var checkPWD = document.getElementById("checkpwdtext").innerHTML;
        if (checkdate == "格式正確" && checkname == "格式正確" && checkPWD == "格式正確") {
            
            alert("表單正確");
        }
        else {
           
            alert("表單錯誤，請重新輸入:");
        }
        
    }

    function resetall() {
        var resetdiv = document.getElementById("resetdiv");
        resetdiv.innerHTML = "";
        var resetdiv2 = document.getElementById("resetdiv2");
        resetdiv2.innerHTML = "";
        var resetdiv3 = document.getElementById("resetdiv3");
        resetdiv3.innerHTML = "";

    }
