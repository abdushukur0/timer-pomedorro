const minuteSettings = document.querySelectorAll('.settings .minute');
const cecondSettings = document.querySelectorAll('.settings .second');
const plusSettings = document.querySelectorAll('.settings ._val-chenge.plus');
const minusSettings = document.querySelectorAll('.settings ._val-chenge.minus');
const presentRoundShow = document.querySelector('.presentRound')
const allRoundsShov = document.querySelector('.allRounds');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const body = document.querySelector('body');
const mainTimerMinute = document.querySelector('.tabata__timer .minute');
const mainTimerSecons = document.querySelector('.tabata__timer .second');
let rounds = document.querySelector('.settings .rounds');
console.log(rounds);
let timeArr = [900, 120, 300];
let presentRound = 1;
let allRounds = 1;
let working = true;
let longBreak = false;
let breaking = false;

function dataFilling() {
	minuteSettings[0].innerHTML = Math.floor(timeArr[0] / 60);
	cecondSettings[0].innerHTML = timeArr[0] % 60;
	minuteSettings[1].innerHTML = Math.floor(timeArr[1] / 60);
	cecondSettings[1].innerHTML = timeArr[1] % 60;
	minuteSettings[2].innerHTML = Math.floor(timeArr[2] / 60);
	cecondSettings[2].innerHTML = timeArr[2] % 60;
	for (let i = 0; i < cecondSettings.length; i++) {
		if (minuteSettings[i].innerHTML.length == 1) {
			minuteSettings[i].innerHTML = '0' + minuteSettings[i].innerHTML;
		}
		if (cecondSettings[i].innerHTML.length == 1) {
			cecondSettings[i].innerHTML = '0' + cecondSettings[i].innerHTML;
		}
	}
}

function mainTimer(num) {
	mainTimerMinute.innerHTML = Math.floor(num / 60);
	mainTimerSecons.innerHTML = num % 60;
	if (mainTimerMinute.innerHTML.length == 1) {
		mainTimerMinute.innerHTML = '0' + mainTimerMinute.innerHTML;
	}
	if (mainTimerSecons.innerHTML.length == 1) {
		mainTimerSecons.innerHTML = '0' + mainTimerSecons.innerHTML;
	}
}

function roundsChenhe() {
	presentRoundShow.innerHTML = presentRound;
	allRoundsShov.innerHTML = allRounds;
	rounds.innerHTML = allRounds;
}

roundsChenhe();

dataFilling();

for (let i = 0; i < plusSettings.length; i++) {
	plusSettings[i].onclick = function () {
		if (timeArr[i] < 3600) {
			timeArr[i] += 30;
			dataFilling();
		}
	}
	minusSettings[i].onclick = function () {
		if (timeArr[i] >= 60) {
			timeArr[i] -= 30;
			dataFilling();
		}
	}
}
plusSettings[3].onclick = function () {
	if (allRounds <= 12) {
		allRounds++;
		roundsChenhe();
	}
}
minusSettings[3].onclick = function () {
	if (allRounds > 1) {
		allRounds--;
		roundsChenhe();
	}
}
function mainFunction() {
	start.disabled = true;
	for (let i = 0; i < plusSettings.length; i++) {
		plusSettings[i].disabled = true;
		minusSettings[i].disabled = true;
	}
	presentRoundShow.innerHTML = presentRound;
	let work = timeArr[0];
	if (presentRound % 4 != 0) {
		let breakingTime = timeArr[1];
	}
	let longBreaking;
	if (presentRound % 4 == 0) {
		longBreaking = timeArr[2];
		breakingTime = 0;

	} else {
		longBreaking = 0;
	}

	let myInterval = setInterval(() => {
		if (work > 0) {
			mainTimer(work);
			work--;
		} else if (presentRound % 4 != 0) {
			breakingTime--;
			mainTimer(breakingTime);
		} else {
			mainTimer(longBreaking);
			longBreaking--;
		}
		if (presentRound == allRounds) {
			console.log(breakingTime);
			console.log(longBreaking);
		}
		if (longBreaking <= 0 && breakingTime <= 0) {
			if (presentRound == allRounds && longBreaking <= 0) {
				clearInterval(myInterval);
				console.log(1);
			}
			else {
				presentRound++;
				clearInterval(myInterval);
				mainFunction();
				console.log(presentRound);
			}
		};
	}, 10)
}

// timer start
start.onclick = mainFunction;
	// let nim = 0;
	// let i = 1;
	// let myInterval = setInterval(() => {
	// 	if (nim < i) {
	// 		console.log(nim);
	// 		nim++;
	// 	} else {
	// 		nim = 0;
	// 		if (i < 12) i++;
	// 		else clearInterval(myInterval);
	// 	}
	// }, 1000);


