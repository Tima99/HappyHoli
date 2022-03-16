    
const _name = document.querySelector('.name') 

const locate = window.location.search.split('=')[1]
const _username = locate && locate.replaceAll('_', '<br/>') || "नाम";
_name.innerHTML = _username;

function seeButton(btn){
    let __name = btn.parentElement.querySelector('input').value
    __name = __name.trim();
    btn.parentElement.querySelector('input').value = ''
    if(!__name) return;
    
    _name.innerHTML =  __name   
    window.scrollTo(0, 0)
    btn.parentElement.style.display = 'none'
    const wapp = btn.parentElement.nextElementSibling
    wapp.style.display = 'flex';
    wapp.href = `whatsapp://send?text= **${__name} ने आपके लिए कुछ भेजा है %0Aजल्दी से *नीली लाइन* को टच करके देखो  %0A👇 👇%0Aclick-karo.site/?n=${__name.replaceAll(' ','_')}`
}

const music = {
    song1 : new Audio(), 
    song2 : new Audio(),
    song3 : new Audio()
}
music.song1.src = './assets/rang_leke-holi_song.mp3'
music.song2.src = "./assets/raguvihra_holi.mp3"
music.song3.src = "./assets/Rang_Barse.mp3"
music.song1.addEventListener('ended', ()=>{
    music.song2.play()
})
music.song2.addEventListener("ended", ()=>{
    music.song3.play()
})
music.song3.addEventListener("ended", ()=>{
    music.song1.play()
})

function touch(ele){
    music.song1.play();    

    ele.style.display = 'none'

    const middle = document.querySelector('.middle-slide')
    middle.style.display ='flex'
    setTimeout(MiddleHide, 1500)
    setTimeout(()=>{
        document.querySelector(".second-slide").style.display = "flex"
    }, 1000)
    function MiddleHide(){
        middle.style.display = "none"
    }
    document.querySelector('.inputs-box').style.display ='flex'
}
