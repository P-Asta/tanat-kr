let a = 0
window.onload = () =>{
    document.getElementById("before").addEventListener("click", () =>{
        if (0 > --a){ return }
        document.querySelectorAll(".work").forEach((e) => {
            e.style.transform = `translateX(-${a*650}px)`
        })
    })
    
    document.getElementById("after").addEventListener("click", () =>{
        if (document.querySelectorAll(".work").length <= ++a){ return }
        document.querySelectorAll(".work").forEach((e) => {
            e.style.transform = `translateX(-${a*650}px)`
        })
    })
}