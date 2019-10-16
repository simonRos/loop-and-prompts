let valueOfPrompt = alert("Welcome, all text inputs will be capitalized");
console.log(valueOfPrompt)


let paths = prompt("What path would you go down?   1,  2  or  3?")
console.log(paths)
if (paths === "1") {
    alert("You have chosen the first path")
    let animals = prompt("You walk for five minutes and see a building with three doors with animal pictures on each. The first is a PENQUIN, second a TIGER and third a PIRANHA. ")

    if (animals === "PENQUIN") {
        alert("Looks like whoever set these rooms up accidentally put the tigers in the penquin room. The tigers attack! ")

    } else if (animals === "TIGER") {
        alert("Well this is strange. The creator put piranhas in a room with no water. They lay on the floor as you walk past into the next room")

    } else if (animals === "PIRANHA") {
        alert("You take a step into a dark room. the door closes behind you. Lights flicker on and the platform your standing on collapses under you. Your now floating in a room with no windows and doors. The door you entered in from is too high to reach from where you are. You float for days till starvation gets the best of you.")
    }
} else if (paths === "2") {
        let cardi = prompt("You have chosen the second path. You enter a room that keeps getting smaller as you walk forward. You get to the point where you must crawl through a small space. You get out and see a Car. Enter the CAR or get some CARDIO in?")

        if (cardi === "CARDIO") {
        alert("Good choice to get some exercise in. You keep walking till you arrive at your apartment. You goto sleep never thinking about that day again")

        } else if (cardi === "CAR") {
        alert("You get in the car, cause why walk when you have a car. The keys are on the seat. You pick them up and put them in the ignition.")
        alert("BOOM..... Looks like the car was rigged to explode. You obviously die sadly. Next time maybe walk.")
        }

} else if (paths === "3") {
            alert("You have chosen the third path")
            prompt("You come across a LADDER or a SLIDE. Which will you use?")
            }
                let ladder = alert("You climb the ladder for what seems like miles to a rooftop")
                ladder = prompt("You see a ZIPLINE to another building and an ELEVATOR with one button. Please input wisely!")

                switch (ladder)
                {
                case "ZIPLINE":
                alert("You zipline to the roof and realize there is no way down. Guess you gotta jump");
                alert("You fall to your death")
                break;
                case "ELEVATOR":
                alert("The elevator starts slowly descending down untill you hear ringing noise. The elevator cuts loose and you fallall the way down to your death.")
                break; 
                
                }
