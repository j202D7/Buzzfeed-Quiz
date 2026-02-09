let input1 = document.querySelector(".questionOne");
let input2 = document.querySelector(".questionTwo");
let button = document.querySelector("button");
let resultText = document.querySelector(".result-text");
let resultImg = document.querySelector(".result-img");

button.onclick = function () {
  console.log("button check");
  let answer1 = input1.value;
  console.log(answer1);
  let answer2 = input2.value;
  console.log(answer2);

  resultText.style.display = "block";
  resultImg.style.display = "block";

  if (answer1 === "Relaxed" && answer2 === "Myself") {
    console.log("Mai Zenin");
    resultText.textContent = "You most represent Mai Zenin";
    resultImg.src =
      "https://animehunch.com/wp-content/uploads/2021/05/Mai-Zenin.jpg";
  } else if (answer1 == "Relaxed" && answer2 === "Others") {
    console.log("Megumi Fushiguro");
    resultText.textContent = "You most represent Megumi Fushiguro";
    resultImg.src =
      "https://images.adagio.com/images2/custom_blends/208981.jpg";
  } else if (answer1 === "Energetic" && answer2 === "Myself") {
    console.log("Haruta Shigemo");
    resultText.textContent = "You most represent Haruta Shigemo";
    resultImg.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWpS28joG6Akqcm9r1i5pTGOq2eCDk5rhQQ&s";
  } else if (answer1 === "Energetic" && answer2 === "Others") {
    console.log("Yuji Itadori");
    resultText.textContent = "You most represent Yuji Itadori";
    resultImg.src = "https://us.oricon-group.com/upimg/detail/2000/2833/img660/yuji-itadori-jjk-EP9%20(9).jpg";
  }
};
