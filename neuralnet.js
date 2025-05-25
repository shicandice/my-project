import * as tf from "@tensorflow/tfjs";
const model = tf.sequential();
model.add(tf.layers.dense({units:10,inputShape:[2], activation:"relu"}));
model.add(tf.layers.dense({units: 1, activation: "sigmoid"}));
model.compile({
    optimizer: "adam",
    loss: "binaryCrossentropy",
    metrics: ["accuracy"]
});
console.log("Neural Network Ready");
