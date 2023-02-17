const habitTracker = new NLWSetup(habitsContainer);
const habitsContainer = document.querySelector("#form-habits");
const addHabitBtn = document.querySelector("header button");

addHabitBtn.addEventListener("click", () => {
	const today = new Date().toLocaleDateString("pt-br").slice(0, 5);
	if (habitTracker.dayExists(today)) {
		alert("Dia ja inserido.");
		return;
	}

	habitTracker.addDay(today);
});

habitsContainer.addEventListener("change", () => {
	localStorage.setItem("habitTrackerData", JSON.stringify(habitTracker.data));
});

const data = JSON.parse(localStorage.getItem("habitTrackerData")) || {};
habitTracker.setData(data);
habitTracker.load();
