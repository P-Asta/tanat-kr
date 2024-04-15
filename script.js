let a = 0
des = ["korcen은 한국어 비속어 판별 오픈소스로 누구나 쉽게 비속어를 판별이 가능합니다.<br>", "기존 키워드 기반의 비속어 판별인 korcen이 딥러닝을 통해 더 강력해진 비속어 판별로 업그레이드하는 프로젝트입니다<br>오픈소스이지만 일부는 유료로 판매합니다.", "TNS봇은 앞선 korcen를 이용해 만들어진 디스코드 봇입니다.<br>비속어 검열 기능 하나만으로 약 20만명의 유저의 채팅을 관리하는 성과를 보였습니다.", "DISOTRE은 디스코드 봇으로 디스코드 내의 다양한 활동을 통해 가상의 화폐를 얻고 서버 관리자가 설정한 물품을 구매가 가능한 봇입니다.<br>다른 경제봇과 다르게 출력이 이미지로 나와 예쁜 디자인을 가지며 다양한 커스텀을 제공합니다."]
window.onload = () =>{
    gap = 849
    gap2 = 9
    if (window.outerWidth <= 450){
        gap = 559
        gap2 = 10.5
    }
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
            e.style.transform = `translateX(-${a*gap}px)`
        })

        document.querySelectorAll(".item").forEach((e) => {
            e.style.transform = `translateX(-${a*gap/gap2}px)`
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
            e.style.transform = `translateX(-${a*gap}px)`
        })

        document.querySelectorAll(".item").forEach((e) => {
            e.style.transform = `translateX(-${a*gap/gap2}px)`
        })
    })
}
