function sendMail() {
    var tempParams = {
        Name:document.getElementById("Name").value,
        Email:document.getElementById("Email").value,
        Phone_Number:document.getElementById("Phone_Number").value,
        Comment_Sect:document.getElementById("Comment").value,
        Service:document.getElementById("Service").value,
    };
    document.getElementById("Name").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Phone_Number").value = "";
    document.getElementById("Service").value = "";
    document.getElementById("Comment").value = "";


    emailjs.send('alphaautomate','alphatemplate',tempParams)
        .then(function (res) {
            console.log("success", res.status);
            alert('email send');
        })
}