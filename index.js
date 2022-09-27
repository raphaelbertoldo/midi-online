

document.addEventListener("keypress", async function (e) {
    const key = e.key.toUpperCase().toString()
    const keyCode = e.code.toLowerCase().toString()
    const audio = document.getElementById(key)
    const keymidi = document.getElementById(keyCode).classList.add('selected')
    console.log(keymidi, keyCode)

    audio.play();
    
}) 

document.addEventListener("keyup", async function (e) {
    const key = e.key.toUpperCase().toString()
    const keyCode = e.code.toLowerCase().toString()
    const audio = document.getElementById(key)
    const keymidi = document.getElementById(keyCode).classList.remove('selected')

    console.log(e.code, key)
    audio.pause();
    audio.currentTime = await 0
})

// document.addEventListener("keyup", function (e) {
//         const key = e.key.toUpperCase()
//         // document.getElementById('a')
//         console.log(e.code, key)
//         const pianoKey = key.toString()
//         console.log(pianoKey)
//         document.getElementById(key).pause()

// })
