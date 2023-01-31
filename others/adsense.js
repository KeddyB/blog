//toggle theme
const themeBtn = document.querySelector('.theme-btn')
themeBtn.addEventListener('click', ()=>{
    let element = document.body
    element.classList.toggle('light-mode')
})
const cookieBox = document.querySelector(".wrapper");
acceptBtn = cookieBox.querySelector('.buttons button')

acceptBtn.onclick = ()=>{
    document.cookie = "CookieBy=Keddy; max-age="+60*60*24*30
    if(document.cookie){
        cookieBox.classList.add('hide')
    }else{
        alert("cookie cannot be set")
    }
}
let checkCookie = document.cookie.indexOf("CookieBy=Keddy");
checkCookie!=-1?cookieBox.classList.add('hide'): cookieBox.classList.remove('hide')