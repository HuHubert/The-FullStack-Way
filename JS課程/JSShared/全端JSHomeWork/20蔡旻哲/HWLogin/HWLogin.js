function checkPwd() {
  //取得idPwd元素
  let thePwdObj = document.getElementById("idPwd");
  console.log(typeof thePwdObj);  //object
  //取得idPwd元素值
  let thePwdObjVal = thePwdObj.value;
  console.log(typeof thePwdObjVal);   //string
  console.log(thePwdObjVal);


  let thePwd = document.getElementById("idPwd").value;
  console.log(thePwd);

  let span = document.getElementById("idsp");
  let thePwdLen = thePwd.length;

  //判斷元素值是否為空白，密碼長度是否大於6
  //如果長度是否大於6，判斷是否包含字母、數字、特殊符號
  if (thePwd == "")
    span.innerHTML = "you must enter";

  else if (thePwdLen >= 6) {


    for (i = 0; i < thePwd.length; i++) {
      if (thePwd.charCodeAt(i) >= 48 && thePwd.charCodeAt(i) <= 57)
        //    unicode: A~Z ：65~90. a~z ：97~122. 0～9 : 48～57
        span.innerHTML = "符合格式"

      else if (thePwd.charCodeAt(i) >= 65 && thePwd.charCodeAt(i) <= 90)
        span.innerHTML = "符合格式"

      else if (thePwd.charCodeAt(i) >= 97 && thePwd.charCodeAt(i) <= 122)
        span.innerHTML = "符合格式"


      else
        span.innerHTML = "需由英文大小寫與數字組成"
    }

  } else
    span.innerHTML = "密碼長度必須大於6";

}

function checkName() {
  let theName = document.getElementById("account").value;


  let span = document.getElementById("idna");


  if (theName == " ")
    span.innerHTML = "you must enter";

  else if (theName.length >= 2) {


    for (i = 0; i < theName.length; i++) {


      if (theName.charCodeAt(i) >= 0x4E00 && theName.charCodeAt(i) <= 0x9FA5)
        //    unicode: A~Z ：65~90. a~z ：97~122. 0～9 : 48～57
        span.innerHTML = "符合格式"


      else
        span.innerHTML = "需由中文組成"

    }

  } else

    span.innerHTML = "名字長度必須大於2";



}












function clearcontent() {
  document.getElementById("idPwd").value = null;
  document.getElementById("account").value = null;

}

// function isEnglish() //英文值檢測
// {
//   let thePwd = document.getElementById("idPwd").value;
//   console.log(thePwd);
//   let span = document.getElementById("idsp");

//   for (i = 0; i < thePwd.length; i++) {
//     if (thePwd.charCodeAt(i) >= 48 && thePwd.charCodeAt(i) <= 57)   // unicode: A~Z ：65~90. a~z ：97~122. 0～9 : 48～57
//       span.innerHTML = "符合格式"
//     else
//       span.innerHTML = "需由英文大小寫與數字組成"
//   }
// }




// function contain(str, charset)// 字符串包含測試函數
// {
//   var i;
//   for (i = 0; i < charset.length; i++)  if (str.indexOf(charset.charAt(i)) >= 0)
//     return true;
//   return false;
// }

// function CheckForm() {
//   if ((contain(document.form.NAME.value, "%\(\)><")) || (contain(document.form.MESSAGE.value, "%\(\)><"))) {
//     alert("輸入了非法字符"); document.form.NAME.focus(); return false;
//   } return true;
// } 