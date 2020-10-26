for (let x = 0; x <= 4; x++) {
    led.enable(false)
    for (let y = 0; y <= 4; y++) {
        led.plot(4 - x + y, y)
    }
    led.enable(true)
    basic.pause(500)
}
for (let y = 0; y <= 4; y++) {
    led.enable(false)
    for (let x = 0; x <= 3; x++) {
        led.plot(x, 1 + y + x)
    }
    led.enable(true)
    basic.pause(500)
}
