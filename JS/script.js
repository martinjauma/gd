const scriptURL = 'https://script.google.com/macros/s/AKfycbxBYEBl5rD0ryG-cI-RR7j-oQQy_R5I3i5Qy1YENDryeNQ1wCqL_GJmrf1s3UVcD-ekNw/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

const generateId = () => Math.floor(Math.random() * 1000);

const idElement = document.getElementById("id_pers");
idElement.value = generateId();