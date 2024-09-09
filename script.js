window.addEventListener("DOMContentLoaded", () => {
  var loading = document.getElementById("loading");
  loading.style.display = "none";

  let btn = document.getElementById("btn");
  btn.onclick = async () => {
    loading.style.display = "block"
    let response = await fetch("https://dog.ceo/api/breed/retriever/golden/images/random");
    if (response.status < 400) {
    let data = await response.json();
     loading.style.display = "none";
    let dogs = document.getElementById("dogs");
        console.log(data.message);

        const img = document.getElementById("img");
        img.src = data.message
        img.width = 600;
        img.height = 600;

        dogs.appendChild(img);

    }
  };



});
