startpause.addEventListener("click", start1Click);
resetbtn1.addEventListener("click", stopClick);
startBtn.addEventListener("click", starClick);
splitBtn.addEventListener("click", splitClick);
resetbtn.addEventListener("click", resetClick);
var resultElem = document.querySelector('.result')
var count = 0, timerId, go = 0, i = 0, count1 = 0, st = 0;


function starClick() {
	if( go==0 ){
		timerId = setInterval(function() {
		count++ 		
		var msec = count%1000
		if (msec < 100) msec = '0' + msec;
		if (msec < 10) msec = '0' + msec;
		var sec = Math.floor(count/100)%60
		if (sec < 10) sec = '0' + sec;
		var min = Math.floor(count/6000)%60
		if (min < 10) min = '0' + min;
		var hour = Math.floor(count/360000)%24
		if (hour < 10) hour = '0' + hour;
		var timer = hour + ':' + min + ':' + sec + ':' + msec;
		forTimer.innerHTML = timer;
		startBtn.innerHTML = 'stop';
	}, 1 )
		go=1;
	} else {
		clearInterval(timerId);
	i++
	splitElem = document.createElement('h1');
			splitElem.innerHTML = i + ".stop:" + forTimer.innerHTML;

			resultElem.appendChild(splitElem);
	startBtn.innerHTML = 'start';
	go=0;
	}
};
function splitClick() {
	i++
	splitElem = document.createElement('h1');
			splitElem.innerHTML = i + ".split:" + forTimer.innerHTML;
			resultElem.appendChild(splitElem);


}
function resetClick(){
	clearInterval(timerId);
	resultElem.innerHTML = '';
	forTimer.innerHTML = '00:00:00:000';
	startBtn.innerHTML = 'start';
	count = 0;
	go =0;




}
function start1Click() {
	if( st==0 ){
		timerId1 = setInterval(function() {
		count1++ 		
		var msec1 = count1%1000
		var sec1 = Math.floor(count1/100)%60
		if (sec1 < 10) sec1 = '0' + sec1;
		var min1 = Math.floor(count/6000)%60
		if (min1 < 10) min1 = '0' + min1;
		var hour1 = Math.floor(count1/360000)%24
		if (hour1 < 10) hour1 = '0' + hour1;
		var timer1 = hour1 + ':' + min1 + ':' + sec1;
		forTimer1.innerHTML = timer1;
		forMsec.innerHTML = msec1;
		startpause.innerHTML = 'pause';

	}, 1 )
		st=1;
	} else {
		clearInterval(timerId1);
	
	startpause.innerHTML = 'start';
	st=0;
	}

}
function stopClick() {
	clearInterval(timerId1);
	count1 = 0;
	forTimer1.innerHTML = '00:00:00';
	forMsec.innerHTML = '0';
	startpause.innerHTML = 'start';
	st=0;
};

