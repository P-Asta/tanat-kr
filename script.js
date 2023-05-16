let a = 0
window.onload = () =>{
    document.getElementById("before").addEventListener("click", () =>{
        if (0 > --a){ return }
        document.querySelectorAll(".work").forEach((e) => {
            e.style.transform = `translateX(-${a*670}px)`
        })
    })
    
    document.getElementById("after").addEventListener("click", () =>{
        if (document.querySelectorAll(".work").length <= ++a){ return }
        document.getElementsByClassName("work")[a - 1].className = "work"
        document.getElementsByClassName("work")[a].className = "work active"
        document.querySelectorAll(".work").forEach((e) => {
            e.style.transform = `translateX(-${a*670}px)`
        })
    })
}