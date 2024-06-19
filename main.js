let time = document.getElementById('time')
function gettime(){
    let now = new Date()
    let hour = now.getHours().toString().padStart(2, "0")
    let min = now.getMinutes().toString().padStart(2, "0")
    let sec = now.getSeconds().toString().padStart(2, "0")
    time.innerHTML=`${hour} : ${min} : ${sec}`
}
gettime()

setInterval(gettime, 1000)