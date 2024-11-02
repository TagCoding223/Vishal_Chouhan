let navLink = document.getElementsByClassName("nav-link");
let navMenuButton = document.getElementsByClassName("navbar-toggler")[0]
let navCollapseMenu = document.getElementsByClassName("navbar-collapse")[0]
for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function () {
        navMenuButton.classList.add("collapsed")
        navCollapseMenu.classList.remove("show")
    })
}

// send mail
let username
let subject
let message
let gotoMailUrl
let sendMessage
document.getElementById('mailme').addEventListener('click', function () {
    username = document.getElementsByName('username')[0].value
    subject = document.getElementsByName('subject')[0].value
    message = document.getElementsByName('message')[0].value

    if (message.length == 0 || subject.length == 0 || username.length == 0) {
        alert("Please fill all information.")
    } else {
        sendMessage = message+"\n\n"+username
        gotoMailUrl = `mailto:codespacev.c22.3@gmail.com?subject=${subject}&body=${sendMessage}`
        location.href = gotoMailUrl
    }
})