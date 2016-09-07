'use strict';

import config from './config.json';
import {setLED, getPhotoResistance, onButtonPress} from './witty';


let wifi = require("Wifi");
let mqtt = require("MQTT").create(config.mqttServer);

setLED('fff');

wifi.connect(config.ssid, {password: config.password}, err => {
    if (err) {
        setLED("f00");
        throw err;
    }
    console.log('Wifi connected');
    setLED("0f0");
    mqtt.connect();
});

mqtt.on('connected', () => {
    console.log('Connected to mqtt!');
});

onButtonPress(evt => {
    console.log("Attempting to publish");
    mqtt.publish("meetups/jsot/status", "pushed");
    mqtt.publish("meetups/jsot/photo-resistance", getPhotoResistance() + "");
});
