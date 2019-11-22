async function app(input) {
  prediction = document.querySelector(".classify h1");
  prediction.innerHTML = "Predicting...";
  console.log("Loading mobilenet..");

  // Load the model.
  net = await mobilenet.load();
  console.log("Successfully loaded model");

  // Make a prediction through the model on our image.
  const imgEl = document.getElementById("img");

  const result = await net.classify(imgEl);
  console.log(result);
  console.log(result[0].className);
  prediction = document.querySelector(".classify h1");

  prediction.innerHTML = result[0].className;
}
