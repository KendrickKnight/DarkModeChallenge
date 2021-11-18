const artiBg = document.querySelectorAll('.arti')
const artiText = document.querySelectorAll('.texts')
const artibtn = document.querySelectorAll('.btn')
const toggle = document.getElementById('tglImg')

console.log(toggle)

function ldMode() {
    toggle.classList.toggle('actTgl')

    document.body.classList.toggle('darkerBg')
    artibtn.forEach(elem => elem.classList.toggle('darkbtn'));
    artibtn.forEach(elem => elem.classList.toggle('lightbtn'));
    artiBg.forEach(elem => elem.classList.toggle('darkBg'));
    artiBg.forEach(elem => elem.classList.toggle('lightbg'));
    artiText.forEach(elem => elem.classList.toggle('darkText'));
    artiText.forEach(elem => elem.classList.toggle('texts'));
}
