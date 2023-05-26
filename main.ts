radio.setGroup(8148)
basic.forever(function () {
    if (input.lightLevel() > 50) {
        radio.sendString("!!!!!!!!")
    } else {
        basic.clearScreen()
    }
})
