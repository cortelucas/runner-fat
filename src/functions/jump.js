export class Jump {
    static execute(fat, alreadyJump) {
        if (!fat.classList.contains('jump')) {
            fat.classList.add('jump')
            alreadyJump = true

            setTimeout(() => {
                fat.classList.remove('jump')
                alreadyJump = false
            }, 1100)
        }
    }
}