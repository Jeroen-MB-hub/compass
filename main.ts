let Graden = 0
basic.forever(function () {
    if (Graden <= 45) {
        basic.showString("N")
    } else if (Graden < 90) {
        basic.showString("O")
    } else if (Graden < 180) {
        basic.showString("Z")
    } else if (Graden < 270) {
        basic.showString("W")
    } else {
    	
    }
    Graden = input.compassHeading()
})
