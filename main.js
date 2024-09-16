//dom declaration
let h = document.getElementById('h')
let m = document.getElementById('m')
let s = document.getElementById('s')
//1000ms error fixed
let now  = new Date()
h.innerHTML = `${now.getHours().toString().padStart(2, "0")} : `
m.innerHTML = `${now.getMinutes().toString().padStart(2, "0")} : `
s.innerHTML = `${now.getSeconds().toString().padStart(2, "0")}`
//clocks brain
setInterval(() => {
        let now  = new Date()
        h.innerHTML = `${now.getHours().toString().padStart(2, "0")} : `
        m.innerHTML = `${now.getMinutes().toString().padStart(2, "0")} : `
        s.innerHTML = `${now.getSeconds().toString().padStart(2, "0")}`
        let min  = now.getMinutes().toString().padStart(2, "0")
        let sec  = now.getSeconds().toString().padStart(2, "0")
        
    }, 1000
)
