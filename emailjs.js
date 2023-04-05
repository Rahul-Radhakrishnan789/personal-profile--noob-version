function sendMail(){
   var params = {
    name:document.getElementById("Name").value,
    email:document.getElementById("Email").value,
    message:document.getElementById("Message").value,
   };
const serviceID = "service_xxpskes";
const templateID ="template_qicuh9k";




emailjs.send(serviceID,templateID,params)
.then((
    res) =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        console.log(res);
        alert("message sent successfully");
    })
    .catch((err) => console.log(err));

    
}