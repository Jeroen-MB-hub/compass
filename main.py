Graden = 0

def on_forever():
    global Graden
    if Graden <= 45:
        basic.show_string("N")
    elif Graden < 90:
        basic.show_string("O")
    elif Graden < 180:
        basic.show_string("Z")
    elif Graden < 270:
        basic.show_string("W")
    else:
        pass
    Graden = input.compass_heading()
basic.forever(on_forever)
