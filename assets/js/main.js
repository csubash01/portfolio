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


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

