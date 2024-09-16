let h = document.getElementById('h')
let m = document.getElementById('m')
let s = document.getElementById('s')
setInterval(() => {
        let now  = new Date()
        h.innerHTML = `${now.getHours().toString().padStart(2, "0")} : `
        m.innerHTML = `${now.getMinutes().toString().padStart(2, "0")} : `
        m.innerHTML = `${now.getSeconds().toString().padStart(2, "0")}`
        let min  = now.getMinutes().toString().padStart(2, "0")
        let sec  = now.getSeconds().toString().padStart(2, "0")
        
    }, 1000
)
