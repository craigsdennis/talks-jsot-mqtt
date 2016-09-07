var client = new Messaging.Client("localhost", 3000, "craig");

console.log("Here we go");

client.connect({
    onSuccess: function() {
        console.log("connected");
        client.subscribe("meetups/jsot/#");
    },
    onFailure: function(response) {
        console.log(response);
    }
});

client.onMessageArrived = function(message) {
    console.log('Boom message is:', message);
    var results = document.getElementById("results");
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(message.destinationName + ":  " + message.payloadString));
    results.appendChild(li);
};