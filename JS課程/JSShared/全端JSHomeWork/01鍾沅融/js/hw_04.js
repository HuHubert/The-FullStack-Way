window.onload = function () {
    var box = document.querySelector(".box");
    var prev = document.querySelector("#prev");
    var next = document.querySelector("#next");
    var container = document.querySelector(".container");
    var btns = document.querySelector("#btn").querySelector("span");
    var index = 1;

    function animate(offset) {
        // 獲取style.left，是相對左邊獲取距離，所以第一張圖後style.left都為負值，
        // 且style.left獲取的是字串，需要用parseInt()轉數字。
        var newLeft = parseInt(box.style.left) + offset;
        box.style.left = newLeft + "px";
        box.style.transition = "300ms ease";
        if (newLeft < -2400) {
            box.style.left = 0 + "px";
        }
        if (newLeft > 0) {
            box.style.left = -2400 + "px";
        }
    }

    var timer;
    function autoplay() {
        timer = setInterval(() => {
            next.onclick();
        }, 3000);
    }
    autoplay();
    function stopplay() {
        clearInterval(timer);
    }
    function showBtn() {
        // 清除之前樣式
        for (let i = 0; i < btn.length; i++) {
            if (btn[i].className == "on") {
                btn[i].className = "";
            }
        }
        btn[index - 1].className = "on";
    }
    prev.addEventListener("click", (event) => {
        index -= 1;
        if (index < 1) {
            index = 5;
        }
        showBtn();
        animate(600);
    });
    next.addEventListener("click", (event) => {
        index += 1;
        if (index > 5) {
            index = 1;
        }
        showBtn();
        animate(-600);
    });
    for (var i = 0; i < btn.length; i++) {
        btn[i].onclick = function () {
            var clickIndex = parseInt(this.getAttribute('index'));
            var offset = 600 * (index - clickIndex);
            animate(offset);
            index = clickIndex;
            showBtn();
        }
    }
    container.onmouseover = stopplay;
    container.onmouseout = autoplay;
}