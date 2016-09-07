# JavaScript on Things Meetup - MQTT Talk

## MQTT re: IoT wrt JS

Here are the [slides](https://docs.google.com/presentation/d/15ZdxYdrJCKyrmJ1wcdWBbibAVXYm76UehZRTzKuR25I/edit) for a talk I gave at the
[Portland JavaScript on Things Meetup](https://www.meetup.com/JavaScript-and-the-Internet-of-Things/events/232618684/)

## Run the demo

1. Get an MQTT server running.  I used [Ponte](http://www.eclipse.org/ponte/) for the backend.  It runs on Port 3000.
1. Open the demo web page on your local machine: `open web/index.html`
1. Verify things are working by using [mosquitto](https://mosquitto.org/download/).  `mosquitto_pub -t meetup/jsot/mosquitto-test -m "Just testing"`. Your message should show up on that web page.
1. Load [Espruino](http://espruino.com) JavaScript runtime on your device.  I flashed my ESP8266 (witty) with [Flasher.js](http://forefront.io/a/introducing-flasher-js/)
1. Modify `./mqtt-esp8266-witty/config.json` to be your settings
1. I used the [thingsSDK CLI](https://github.com/thingsSDK/thingssdk-cli) to generate the project in mqtt-esp8266-witty, so you can just `npm run push`
1. Push the button on your witty and it will publish to your server and the WebSockets on the static html page will update the page.

