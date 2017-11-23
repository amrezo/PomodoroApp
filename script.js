var seconds;
var temp;

function startTimer() {
	document.getElementById("start-button").disabled = true;
	time = document.getElementById('timer').innerHTML;
	timeArray = time.split(':')
	seconds = timeToSeconds(timeArray);

	if (seconds == '') {
		// TODO: Add sound alert when countdown over for either sessions..
		temp = document.getElementById('timer');
		temp.innerHTML = "00:00";

		return;
	}

	seconds--;
	temp = document.getElementById('timer');
	temp.innerHTML= secondsToTime(seconds);
	timeoutMyOswego = setTimeout(startTimer, 1000);
    
}

function timeToSeconds(timeArray) {  
	var minutes = (timeArray[0] * 1);
	var seconds = (minutes * 60) + (timeArray[1] * 1);

	return seconds;
}

function secondsToTime(secs) {
	var hours = Math.floor(secs / (60 * 60));
	hours = hours < 10 ? '0' + hours : hours;

	var divisor_for_minutes = secs % (60 * 60);

	var minutes = Math.floor(divisor_for_minutes / 60);
	minutes = minutes < 10 ? '0' + minutes : minutes;

	var divisor_for_seconds = divisor_for_minutes % 60;

	var seconds = Math.ceil(divisor_for_seconds);
	seconds = seconds < 10 ? '0' + seconds : seconds;

	return  minutes + ':' + seconds;
    
}


function setBreak() {
	document.getElementById("timer").textContent = "5:00";
}

function setFocus() {
	document.getElementById("timer").textContent = "25:00";
}

function stopTimer() {
	window.location.reload();
}