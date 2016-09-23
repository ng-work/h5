(function (doc, win) {
    var docEl = doc.documentElement, //获取html标签
		//orientationchange方向改变事件
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
			//当前设备视口宽度
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 1080) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);  //load
})(document, window);

/*var d=document.documentElement.clientWidth;
	document.getElementsByTagName('html')[0].style.width=d/375*625+'%';
	console.log(d);*/