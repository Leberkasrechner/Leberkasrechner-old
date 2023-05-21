let enoughornot = () => {
    let LeberkasCount = document.getElementById("LeberkasCount").value;
    let answerSection = document.getElementById("answerSection");
    let Map = document.querySelector(".butcher-map")
    if (LeberkasCount < 3) {
        answerSection.innerHTML = "Um Gottes Willen! Du brauchst jetzt Leberkäse. Hier findest du Metzgereien:"
        Map.classList.remove("map-hidden");
        Map.classList.toggle("map-visible"); 
    } else if (LeberkasCount < 7) {
        answerSection.innerHTML = "<br><br>Basst. Du host gnua Lebakas."
        Map.classList.remove("map-visible");
        Map.classList.toggle("map-hidden"); 
    } else if (LeberkasCount >= 7) {
        answerSection.innerHTML = "<br><br>Sappralot! Da werd da ja schlecht!"
        Map.classList.remove("map-visible");
        Map.classList.toggle("map-hidden"); 
    }
}