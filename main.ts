input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.rotation(Rotation.Pitch)))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.rotation(Rotation.Roll)))
})
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) > 40) {
        for (let index = 0; index < 2; index++) {
            music.playMelody("C5 - C5 - C5 - C5 - ", 120)
        }
    }
    if (input.rotation(Rotation.Roll) == 40) {
        for (let index = 0; index < 4; index++) {
            music.playMelody("C5 C D B A E F G ", 120)
        }
    }
})
