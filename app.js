const image = document.getElementById("Image");
const wordings = document.getElementById("wordings");
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const audio = document.getElementById("audio");
const audio2 = document.getElementById("audio2");
const accepted = document.getElementById("acceptedContainer");
const link =
  "https://api.whatsapp.com/send?phone=2349028111613&text=pick%20me%20up%20%40%20_________%0Aby%20___pm..";
const whatsappBtn = document.getElementById("whatsapp");

noBtn.addEventListener("click", () => {
  noBtn.classList.add("hide");
  wordings.classList.add("hide");
  image.classList.add("hide");
  audio2.play();
  setTimeout(() => {
    wordings.innerHTML =
      "You think I'm playing at some game😤?<br /> or do You think I would take No for an Answer😒, Dey play my fans🤣. The NO was just for show... <br />Now click on the Yes Button🤗😚💕.";
    image.setAttribute("src", "./images/gunpoint.png");
  }, 2000);
  setTimeout(() => {
    wordings.classList.remove("hide");
    wordings.classList.add("appear");
    image.classList.remove("hide");
    image.classList.add("appear");
  }, 3000);
  if (noBtn.classList.contains("hide")) {
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  yesBtn.classList.add("hide");
  noBtn.classList.add("hide");
  audio.play();
  setTimeout(() => {
    accepted.classList.remove("hide");
    accepted.classList.add("appear");
  }, 1000);
});

whatsappBtn.addEventListener("click", () => {
  window.location.assign(link);
});
