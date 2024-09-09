window.addEventListener("DOMContentLoaded",async  ()=> {
    var loading = document.getElementById("loading");
    
    
    loading.style.display = "block";
    try{
        const response = await fetch("https://romitshah02.github.io/ete/dog.json");
        const data = await response.json();
        var dogs = document.getElementById("dogs");
        
        const img = document.getElementById("img");
        img.src = data.imageUrl
        img.width = 400;
        img.height = 400;

        var name = document.createElement("div")
        name.innerText = `Breed - ${data.breedName}`;
        name.className = "details"

        var des = document.createElement("div")
        des.innerText = `Description - ${data.description}`;
         name.className = "details"

        var size = document.createElement("div")
        size.innerText = `Size - ${data.size}`;
         name.className = "details"

        dogs.appendChild(img)
        dogs.appendChild(name)
        dogs.appendChild(des)
        dogs.appendChild(size)
    }catch (e) {
        console.log(e);
        
    }
    finally{
        loading.style.display = "none";
    }
})