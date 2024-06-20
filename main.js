let h = document.getElementById('h')
let m = document.getElementById('m')
let s = document.getElementById('s')
function gettime(){
    let now = new Date()
    let hour = now.getHours().toString().padStart(2, "0")
    let min = now.getMinutes().toString().padStart(2, "0")
    let sec = now.getSeconds().toString().padStart(2, "0")
    h.innerHTML=`${hour} : `
    m.innerHTML=`${min} : `
    s.innerHTML=`${sec}`
}
gettime()

setInterval(gettime, 1000)