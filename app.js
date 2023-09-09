let mode = 'time'

let output = document.getElementById("output")
let fullBtn = document.getElementById("full")
let dateBtn = document.getElementById("date")
let timeBtn = document.getElementById("time")

function bindMode(name) {
	return function() {
		mode = name
		update()
	}
}

fullBtn.onclick = bindMode("full")
dateBtn.onclick = bindMode("date")
timeBtn.onclick = bindMode("time")


setInterval(update, 10)
update()

function update() {
	output.textContent = format(mode)
}

function format(formatMode) {
	let now = new Date()

	switch(formatMode) {
		case 'date': 
			return now.toLocaleDateString()
		case 'full': 
			return now.toLocaleDateString() +' '+ now.toLocaleTimeString() +'.'+ now.getMilliseconds()
		case 'time': 
		default:
			return now.toLocaleTimeString() +'.'+ now.getMilliseconds()
	}
}