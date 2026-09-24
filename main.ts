input.onButtonPressed(Button.A, function () {
    alarm = 1
    basic.showString("ON")
})
input.onButtonPressed(Button.B, function () {
    alarm = 0
    basic.showString("OFF")
})
let alarm = 0
alarm = 0
basic.forever(function () {
    if (alarm == 1) {
        if (input.lightLevel() < 50 && input.soundLevel() > 150) {
            music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 120), music.PlaybackMode.UntilDone)
        }
        if (input.isGesture(Gesture.Shake)) {
            music.play(music.stringPlayable("C5 F C5 F C5 F C5 F ", 120), music.PlaybackMode.UntilDone)
        }
    } else {
        basic.showIcon(IconNames.No)
    }
})
