const textarea = document.getElementById("textarea");
const button = document.getElementById("kirim");
button.style.display = "none";


function check(){
    const textarea = document.getElementById("textarea");
    const button = document.getElementById("kirim");
    
      if (textarea.value.length > 0) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
      console.log(button);
}

textarea.addEventListener('input', function(){
    check()
})

// button.addEventListener('onclick', function(){
//     window.location.href = "sent.html";
// })

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const url = e.target.action;
  const formData = new FormData(contactForm);
  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      window.location.href="sent/sent.html";
    })
    .catch((e) => alert("Error occured"));
});