const msginput=document.getElementById('message');
function callUs() {
    const contactInfo = document.getElementById('contact-info');
    contactInfo.innerHTML = '<a href="tel:+9060468134">Call us at:Admin</a>';
    contactInfo.style.display = 'block';
  }
  
  function mailUs() {
    const contactInfo = document.getElementById('contact-info');
    contactInfo.innerHTML = '<a href="mailto:aditya1027.be22@chitkarauniversity.edu.in">Send Email</a>';
    contactInfo.style.display = 'block';
  }
  
  function chatWithUs() {
    
    window.location.href="https://wa.me/+919060468134?text${msginput}";
  
  }
  function telegramUs() {
  window.location.href="https://t.me/+919060468134";
  }