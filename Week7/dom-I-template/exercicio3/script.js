let numClicks = 0;

const countClicks = () => {
  numClicks++;

  const counter = document.getElementsByTagName("button");

  console.log(numClicks);
};
