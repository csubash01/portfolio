/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
  contactMessage = document.getElementById('contact-message')
const sendEmail = (e) =>{
     e.preventDefault()
 
     //serviceID - templateID - #form - publickey
     emailjs.sendform('service_fryr5cx','template_92uq8ae','#contact-form','fMqbg3-jm_BqYdnTi')

    .then(() =>{
      //show sent message
      contactMessage.textContent = 'Message sent successfully ✅'

      //Remove message after five seconds
      setTimeout(() =>{
        contactMessage.textContent = ''
      }, 5000)

      //clear input fields
      contactForm.reset()
    }, () =>{
      //show error message
      contactMessage.textContent = 'Message not sent (Service error) ❌'
    })
}
contactForm.addEventListener('submit', sendEmail)
  

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
   //when the scrollup is higher than 350 viewport height, add the class list
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                 : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollDown = window.scrollY

  sections.forEach(current =>{ 
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionClass.classList.add('active-link')
    }else{
      sectionClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll' ,scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/

