let Graden = 0
basic.forever(function () {
    Graden = input.compassHeading()
    if (Graden < 45) {
        basic.showString("N")
    } else if (Graden <= 135) {
        basic.showString("O")
    } else if (Graden < 225) {
        basic.showString("Z")
    } else {
        basic.showString("W")
    }
})
