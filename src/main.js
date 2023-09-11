import { Jump } from "./functions/index.js"

const fat = document.querySelector('.fat')
const hamb = document.querySelector('.hamb')
const score = document.querySelector('.score')
let alreadyJump = false
let count = 0

document.addEventListener('keydown', (event) => {
    if ((event.code === 'ArrowUp') | (event.code === 'Space')) {
        Jump.execute(fat, alreadyJump)
    }
})

setInterval(() => {
    let fatBottom = parseInt(
        window.getComputedStyle(fat).getPropertyValue('bottom')
    )
    let hambLeft = parseInt(
        window.getComputedStyle(hamb).getPropertyValue('left')
    )

    if (hambLeft > 0 && hambLeft < 130 && fatBottom <= 20 && !alreadyJump) {
        alert(`Game Over! Seu score foi: ${count}`)
        count = 0
    }

    count++
    score.innerHTML = `SCORE: ${count}`
}, 10)
