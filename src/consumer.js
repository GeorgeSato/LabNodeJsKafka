let countriesTopic = "countries";
//const client = new kafka.Client("http://localhost:2181");

var options = {
    fromOffset: 'latest'
};


var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient("http://172.17.0.9:2181"),
    consumer = new Consumer(
        client,
        [
            { topic: countriesTopic, partition: 0 }
        ],
        [
        {
            autoCommit: false
        },
        options =
        {
            fromOffset: 'latest'
        }
        ]
    );


consumer.on('message', function(message){
    console.log(message);
});


consumer.on('error', function(err) {
    console.error("Problem with consumer Kafka message " + err);
});