function scrollEvents() {
  const sections = document.querySelectorAll('.section')
  const links = document.querySelectorAll('.nav__link')
  const menu = document.querySelector('.nav__list')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
       if(entry.isIntersecting) {
          links.forEach(link => {
            const linkHref = link.getAttribute('href').replace('#', '')

            if(linkHref === entry.target.id) {
               link.classList.add('active')
            } else{
              link.classList.remove('active')
            }

          })
       }
    })
  }, {
    threshold: 0.8,
  })

  sections.forEach((section) => {
    observer.observe(section)
  })

  menu.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav__link')) {
        e.preventDefault()

        const sectionId = e.target
        .getAttribute('href')
        .replace('#', '')

        window.scrollTop({
          top: document.getElementById(sectionId).offset
        })
    }
  })
}

scrollEvents()

function animateProgressBar() {
  const progress = document.querySelector('.progress__bar')

  const scrollValue = document.documentElement.scrollTop

  const documentHeight = document.documentElement.scrollHeight
  const viewportHeight = document.documentElement.clientHeight
  
  const height = documentHeight - viewportHeight
  const scrollPercent = (scrollValue / height) * 100
  console.log('scrollPercent', scrollPercent)

  progress.style.width = scrollPercent + '%'

}

window.addEventListener('scroll', animateProgressBar)