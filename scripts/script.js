const habitsContainer = document.querySelector("#form-habits");

const habitTracker = new NLWSetup(habitsContainer);

const data = {
	water: ["01-04", "01-05"],
	food: ["01-01", "01-03"],
	music: ["01-01", "01-02", "01-06"],
};

habitTracker.setData(data);
habitTracker.load();
