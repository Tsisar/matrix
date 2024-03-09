input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    adjustPause(false)
})
function doMatrix () {
    x = randint(0, 4)
    while (list[x] == 0) {
        x = (x + 1) % 5
    }
    max = list[x] - 1
    directions = [
    "up",
    "down",
    "left",
    "right"
    ]
    for (let y = 0; y <= max; y++) {
        plotDirection(y, directions[logo])
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
function plotDirection (y: number, direction: string) {
    switch (direction) {
        case "up":
            led.plot(x, y);
            led.unplot(x, y - 1);
            break;
        case "down":
            led.plot(x, 4 - y);
            led.unplot(x, 5 - y);
            break;
        case "left":
            led.plot(y, x);
            led.unplot(y - 1, x);
            break;
        case "right":
            led.plot(4 - y, x);
            led.unplot(5 - y, x);
            break;
    }
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    adjustPause(true)
})
function showHeart () {
    heart = false
    basic.showIcon(IconNames.Heart, 600)
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.SmallHeart, pause2)
        basic.showIcon(IconNames.Heart, pause2)
    }
    basic.clearScreen()
}
function adjustPause (increase: boolean) {
    if (increase && pause2 < 1000) {
        pause2 += 50
    } else if (!(increase) && pause2 > 50) {
        pause2 += 0 - 50
    }
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
    list = [
    5,
    5,
    5,
    5,
    5
    ]
    basic.clearScreen()
}
function remove () {
    for (let y2 = 0; y2 <= 4; y2++) {
        for (let x2 = 0; x2 <= 4; x2++) {
            led.unplot(x2, y2)
        }
        basic.pause(pause2)
    }
}
let heart = false
let repeat = 0
let logo = 0
let directions: string[] = []
let max = 0
let list: number[] = []
let x = 0
let pause2 = 0
pause2 = 100
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
