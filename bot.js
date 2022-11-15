const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return [
        "Halo, Perkenalan aku bot. siapa nama kamu?",
        `Halo ${data?.nama}, berapa usia kamu?`,
        `Ohh ${data?.usia}, hobi kamu apa?`,
        `Ohh sama dong aku juga hobi ${data?.hobi}, btw kamu punya pacar?`,
        `Ohh ${data?.pacar}, ya udah kalau gitu. udahan dlu ya`
    ]
}

pertanyaan.innerHTML = botSay()[0] 

let userData = []

function botStart() {
    if(jawaban.value.length < 1) return alert("silahkan isi jawaban dulu")
    init++
    if(init === 1) {
        botDelay({nama: jawaban.value})
    } else if (init === 2){
        botDelay({usia: jawaban.value})
    } else if (init === 3) {
        botDelay({hobi: jawaban.value})
    } else if (init === 4) {
        botDelay({pacar: jawaban.value})
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(4px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, 1000)
    userData.push(jawaban.value)
    jawaban.value = ''
}

function finishing() {
    pertanyaan.innerHTML = `Thanks ya ${userData[0]} udah mau jawab pertanyaan aku 😘,
    sekali-kali kita main ${userData[2]} bareng ya`
    jawaban.value = 'Iya thanks juga'
}

function botEnd() {
    alert(`Terima Kasih ${userData[0]} sudah berkunjung, anda akan diarahkan ke halaman utama`)
    window.location.reload()
}