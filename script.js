let a = 0
des = ["대충설명1", "대충설명2", "대충설명3"]
window.onload = () =>{
    document.getElementById("des").innerHTML = des[0]
    document.getElementById("before").addEventListener("click", () =>{
        a = a > document.querySelectorAll(".work").length ? document.querySelectorAll(".work").length-1 : a
        if (0 > --a){ return }
        document.getElementsByClassName("work")[a].className = "work active"
        document.getElementsByClassName("work")[a + 1].className = "work"
        document.getElementById("des").innerHTML = des[a]
        
        
        document.getElementsByClassName("item")[a].className = "item active"
        document.getElementsByClassName("item")[a + 1].className = "item"

        document.querySelectorAll(".work").forEach((e) => {
            e.style.transform = `translateX(-${a*869}px)`
        })
    })
    
    document.getElementById("after").addEventListener("click", () =>{
        a = a < 0? 0: a
        if (document.querySelectorAll(".work").length <= ++a){ return }
        
        document.getElementsByClassName("work")[a - 1].className = "work"
        document.getElementsByClassName("work")[a].className = "work active"
        document.getElementById("des").innerHTML = des[a]

        
        document.getElementsByClassName("item")[a - 1].className = "item"
        document.getElementsByClassName("item")[a].className = "item active"

        document.querySelectorAll(".work").forEach((e) => {
            e.style.transform = `translateX(-${a*869}px)`
        })
    })
}