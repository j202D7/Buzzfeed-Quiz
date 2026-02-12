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
    resultImg.src =
      "https://us.oricon-group.com/upimg/detail/2000/2833/img660/yuji-itadori-jjk-EP9%20(9).jpg";
  } else if (answer1 === "Loyal" && answer2 === "Others") {
    console.log("Nanko and Mimiko");
    resultText.textContent = "You most represent Nanako and Mimiko";
    resultImg.src =
      "https://fictionhorizon.com/wp-content/uploads/2023/08/MimiNana.jpg";
  } else if (answer1 === "Kindhearted" && answer2 === "Others") {
    console.log("Utahime Lori");
    resultText.textContent = "You most represent Utahime Lori";
    resultImg.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nxlfguSEJ4iPoA-DDafBIBk7knGpyTHl2Q&s";
  } else if (answer1 === "Irresponsible" && answer2 === "Others") {
    console.log("Satoru Gojo");
    resultText.textContent = "You most represent Satoru Gojo";
    resultImg.src =
      "https://miro.medium.com/v2/resize:fit:1400/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg";
  } else if (answer1 === "Loyal" && answer2 === "Myself") {
    console.log("Aoi Todo");
    resultText.textContent = "You most represent Aoi Todo";
    resultImg.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt1acVbeHRmnO_wOi0UN3U2JnDONKSpm-mvw&s";
  } else if (answer1 == "Kindhearted" && answer2 == "Myself") {
    console.log("Yuta Okkotsu");
    resultText.textContent = "You most represent Yuta Okkotsu";
    resultImg.src =
      "https://static0.moviewebimages.com/wordpress/wp-content/uploads/2025/12/jujutsu-kaisen-season-3-yuta-fight-stance.jpg?w=1600&h=900&fit=crop";
  } else if (answer1 == "Irresponsible" && answer2 === "Myself") {
    console.log("Ryomen Sukuna");
    resultText.textContent = "You most represent Ryomen Sukuna";
    resultImg.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXvCXiPKuFXdQJbp5jD0LpzV94G_9KzVehLw&s";
  }
};
