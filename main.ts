input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
    basic.showString("LOVE")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    basic.clearScreen()
})
