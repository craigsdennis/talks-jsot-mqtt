'use strict';
import {hexToRgb} from './utils';

const PIN_LDR = 0;
const PIN_BUTTON = 4;
const PIN_LED_R = 15;
const PIN_LED_G = 12;
const PIN_LED_B = 13;

export function getPhotoResistance() {
    return analogRead(PIN_LDR);
}

export function setLED(hex) {
    let result = hexToRgb(hex);
    console.log("Setting led to", hex, result);
    digitalWrite(PIN_LED_R, result.R);
    digitalWrite(PIN_LED_G, result.G);
    digitalWrite(PIN_LED_B, result.B);
}

export function onButtonPress(handler) {
    setWatch(function(evt) {
        handler.apply(this, [evt]);
    }, PIN_BUTTON, {repeat: true, edge: 'rising'});
}