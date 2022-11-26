const minuteSettings = document.querySelectorAll('.settings .minute');
const cecondSettings = document.querySelectorAll('.settings .second');
const plusSettings = document.querySelectorAll('.settings ._val-chenge.plus');
const minusSettings = document.querySelectorAll('.settings ._val-chenge.minus');
const presentRoundShow = document.querySelector('.presentRound')
const allRoundsShov = document.querySelector('.allRounds');
let rounds = document.querySelector('.settings .rounds');
console.log(rounds);
let timeArr = [900, 120, 300];
let presentRound = 1;
let allRounds = 4;


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