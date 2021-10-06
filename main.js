const toggler = document.querySelector('.toggler')
const togglerItems = Array.from(toggler.children)
const nav = document.querySelector('.nav')
const links = document.querySelectorAll('.nav-list a')

const mobileMenu = () => {
    togglerItems.forEach(btn => btn.addEventListener('click', () => {
        toggler.classList.toggle('active')
        btn.classList.remove('active')
        const close = toggler.querySelector('.close')
        close.classList.add('active')
        nav.classList.toggle('active')
        close.addEventListener('click', (e) => {
            e.currentTarget.classList.remove('active')
            btn.classList.add('active')
        })
    }))
}

mobileMenu()

links.forEach(link => link.addEventListener('click', e => {
    toggler.classList.toggle('active')
    togglerItems.forEach(btn => btn.classList.toggle('active'))
    nav.classList.toggle('active')
}))