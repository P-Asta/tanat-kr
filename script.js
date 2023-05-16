let a = 0
window.onload = () =>{
    document.getElementById("before").addEventListener("click", () =>{
        a = a > document.querySelectorAll(".work").length ? document.querySelectorAll(".work").length-1 : a
        if (0 > --a){ return }
        document.getElementsByClassName("work")[a].className = "work active"
        document.getElementsByClassName("work")[a + 1].className = "work"

        
        document.getElementsByClassName("item")[a].className = "item active"
        document.getElementsByClassName("item")[a + 1].className = "item"

        document.querySelectorAll(".work").forEach((e) => {
            e.style.transform = `translateX(-${a*870}px)`
        })
    })
    
    document.getElementById("after").addEventListener("click", () =>{
        a = a < 0? 0: a
        if (document.querySelectorAll(".work").length <= ++a){ return }
        
        document.getElementsByClassName("work")[a - 1].className = "work"
        document.getElementsByClassName("work")[a].className = "work active"

        document.getElementsByClassName("item")[a - 1].className = "item"
        document.getElementsByClassName("item")[a].className = "item active"

        document.querySelectorAll(".work").forEach((e) => {
            e.style.transform = `translateX(-${a*870}px)`
        })
    })
}