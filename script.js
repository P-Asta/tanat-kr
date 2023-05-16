a = 0
window.onload = () =>{
    document.getElementById("next").addEventListener("click", () =>{
        a++
        document.querySelectorAll(".work").forEach((e) => {
            e.style.transform = `translateX(${a*100}%)`
        })
    })
}