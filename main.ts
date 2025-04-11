input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    basic.showIcon(IconNames.Meh)
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - start
    Score = Math.abs(7000 - elapsed)
    basic.showString("score:")
    basic.showNumber(Score)
})
let Score = 0
let elapsed = 0
let start = 0
basic.showString("777")
