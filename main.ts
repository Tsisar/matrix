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
        x = randint(0, 4)
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
    reset()
    logo = 0
})
input.onGesture(Gesture.TiltLeft, function () {
    reset()
    logo = 3
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    reset()
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
function plotUp (y: number) {
    led.plot(x, y)
    led.unplot(x, y - 1)
}
input.onGesture(Gesture.TiltRight, function () {
    reset()
    logo = 2
})
input.onGesture(Gesture.LogoDown, function () {
    reset()
    logo = 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    reset()
    basic.showIcon(IconNames.Heart, pause2)
    basic.showIcon(IconNames.SmallHeart, pause2)
    basic.showIcon(IconNames.Heart, pause2)
})
function reset () {
    repeat = 0
    for (let index = 0; index <= 4; index++) {
        list[index] = 5
    }
    basic.clearScreen()
}
let max = 0
let list: number[] = []
let x = 0
let y = 0
let repeat = 0
let logo = 0
let pause2 = 0
pause2 = 100
logo = 0
repeat = 0
basic.forever(function () {
    reset()
    while (repeat < 24) {
        repeat += 1
        doMatrix()
    }
    basic.pause(pause2)
    repeat = 0
    basic.clearScreen()
})
