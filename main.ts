radio.onReceivedNumber(function (receivedNumber) {
    for (let index5 = 0; index5 <= 2; index5++) {
        drawSquare(index5)
        basic.pause(100)
        dimCurrent()
    }
    for (let index = 0; index < 3; index++) {
        dimCurrent()
        basic.pause(100)
    }
    radio.sendNumber(0)
})
function drawSquare (radius: number) {
    for (let index = 0; index <= radius * 2; index++) {
        led.plotBrightness(index + 2 - radius, 2 - radius, 255)
    }
    for (let index2 = 0; index2 <= radius * 2; index2++) {
        led.plotBrightness(index2 + 2 - radius, 2 + radius, 255)
    }
    for (let index3 = 0; index3 <= radius * 2; index3++) {
        led.plotBrightness(2 + radius, index3 + 2 - radius, 255)
    }
    for (let index4 = 0; index4 <= radius * 2; index4++) {
        led.plotBrightness(2 - radius, index4 + 2 - radius, 255)
    }
}
input.onButtonPressed(Button.A, function () {
    drawSquare(0)
})
input.onButtonPressed(Button.B, function () {
    drawSquare(2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(0)
})
function dimCurrent () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            led.plotBrightness(i, j, led.pointBrightness(i, j) / 4)
        }
    }
}
radio.setGroup(1)
