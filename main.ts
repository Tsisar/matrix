function plotRight (y: number) {
    led.plot(4 - y, x)
    led.unplot(5 - y, x)
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (pause2 > 50) {
        pause2 += -50
    }
})
function doMatrix () {
    x = randint(0, 4)
    while (list[x] == 0) {
        if (x < 4) {
            x += 1
        } else {
            x = 0
        }
    }
    max = list[x] - 1
    for (let y = 0; y <= max; y++) {
        if (logo == 0) {
            plotUp(y)
        } else if (logo == 1) {
            plotDown(y)
        } else if (logo == 2) {
            plotLeft(y)
        } else {
            plotRight(y)
        }
        list[x] = y
        basic.pause(pause2)
    }
}
input.onGesture(Gesture.LogoUp, function () {
    repeat = 24
    logo = 0
})
input.onGesture(Gesture.TiltLeft, function () {
    repeat = 24
    logo = 3
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    repeat = 24
    remove()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (pause2 < 1000) {
        pause2 += 50
    }
})
function plotLeft (y: number) {
    led.plot(y, x)
    led.unplot(y - 1, x)
}
function plotDown (y: number) {
    led.plot(x, 4 - y)
    led.unplot(x, 5 - y)
}
function showHeart () {
    heart = false
    basic.showIcon(IconNames.Heart, 600)
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.SmallHeart, pause2)
        basic.showIcon(IconNames.Heart, pause2)
    }
    basic.clearScreen()
}
function plotUp (y: number) {
    led.plot(x, y)
    led.unplot(x, y - 1)
}
input.onGesture(Gesture.TiltRight, function () {
    repeat = 24
    logo = 2
})
input.onGesture(Gesture.LogoDown, function () {
    repeat = 24
    logo = 1
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    repeat = 24
    heart = true
})
function reset () {
    repeat = 0
    for (let index = 0; index <= 4; index++) {
        list[index] = 5
    }
    basic.clearScreen()
}
function remove () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.unplot(x, y)
        }
        basic.pause(pause2)
    }
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
    basic.pause(pause2)
    basic.turnRgbLedOff()
}
let max = 0
let list: number[] = []
let x = 0
let y = 0
let heart = false
let repeat = 0
let logo = 0
let pause2 = 0
pause2 = 100
logo = 0
repeat = 0
heart = false
music.playTone(2000, music.beat(BeatFraction.Quarter))
basic.forever(function () {
    reset()
    if (heart) {
        showHeart()
    }
    while (repeat < 25) {
        repeat += 1
        doMatrix()
    }
    basic.pause(pause2)
})
