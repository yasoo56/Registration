let userEmailLogin = document.querySelector("#useremailLogin")
let userEmail = document.querySelector("#useremail")
let userPass = document.querySelector("#userpass")
let userPassLogin = document.querySelector("#userpassLogin")
let userName = document.querySelector("#userName")
let loginBtn = document.querySelector("#login")
let signUpBtn = document.querySelector("#signUp")
let exist = document.querySelector('#Exsist')



let regList = []
// let path = location.pathname.split('/')
// let base = ''
// for (let i = 0; i < path.length - 1; i++) {
//     base += '/' + path[i]
// }
if (localStorage.getItem('data') != null) {
    regList = JSON.parse(localStorage.getItem('data'))
}

function isEmailExist() {
    for (let i = 0; i < regList.length; i++) {
        if (regList[i].email == userEmail.value)
        return true
    }
}
let name_user = localStorage.getItem('loginName')
if (name_user) {
    document.querySelector('#welcome').innerHTML = "Hello, " + name_user
}
function signUp() {
    if (validationName() == true && validationEmail() == true && validationPass() == true) {
        let reg = {
            name: userName.value,
            email: userEmail.value,
            pass: userPass.value
        }
        if (isEmailExist()) {
            document.querySelector('#Exsist').innerHTML = '<span class="text-danger m-3 fs-4">Email Is Exist...</span>'
        } else {
            regList.push(reg)
            localStorage.setItem('data', JSON.stringify(regList))
            document.querySelector('#warring').innerHTML = '<span class="text-success m-3 fw-bold fs-3">Success...</span>'
            // for (let i = 0; i < regList.length; i++) {
            //     if (base == '/') {
            //         location.href('https://' + location.hostname + 'index.html')
            //     } else {
            //         location.href(base + 'index.html')
            //     }
            // }
            window.location.href = 'index.html'
            clearInfoSign()
            exist.classList.add('d-none')
        }
        return true

    } else {
        document.querySelector('#warring').innerHTML = '<span class="text-danger m-3 fs-4">All inputs is required...</span>'
    }
}

function login() {
    if(validationEmailLogin() == true && validationPassLogin() == true){   
        for (let i = 0; i < regList.length; i++) {
            let em = userEmailLogin.value
            let pas = userPassLogin.value
            if (isEmailAndPassExist(em,pas)) {
                document.querySelector('#text').innerHTML = '<span class="text-success m-3 fw-bold fs-3">Success.<span>'
                clearInfoLogin()
                window.location.href='home.html'
                // if (base == '/') {
                //     location.href('https://' + location.hostname + 'home.html')

                // } else {
                //     location.href(base + 'home.html')
                // }

                
                localStorage.setItem('loginName', regList[isEmailAndPassExist(em,pas)-1].name)
            } else {
                document.querySelector('#message').innerHTML = '<span class="text-danger m-3 fs-4">Incorrect Email Or Password...</span>'
            }

        }
        return true
    }else {
        document.querySelector('#text').innerHTML = '<span class="text-danger m-3 fs-4">All inputs is required...</span>'
    }
}
    


    

    
function isEmailAndPassExist(em,pas){
    for(let i = 0 ; i < regList.length ; i++){
        if(regList[i].email == em && regList[i].pass == pas){
            return true
        }
    }


}





function clearInfoLogin() {

    userEmailLogin.value = ''
    userPassLogin.value = ''
    userEmailLogin.classList.remove('is-valid')
    userPassLogin.classList.remove('is-valid')
}
function clearInfoSign() {
    userName.value = ''
    userEmail.value = ''
    userPass.value = ''
    userEmail.classList.remove('is-valid')
    userName.classList.remove('is-valid')
    userPass.classList.remove('is-valid')
}
function validationName() {
    let nameValid = userName.value
    let pattern = /^\w{4,}(\s+\w+)*$/;
    if (pattern.test(nameValid) == true) {
        userName.classList.add('is-valid')
        userName.classList.remove('is-invalid')
        return true
    } else {
        userName.classList.remove('is-valid')
        userName.classList.add('is-invalid')
        return false
    }
}

function validationEmailLogin() {
    let emailValid = userEmailLogin.value
    let pattern = /^\S+@\S+\.\S+$/;
    if (pattern.test(emailValid) == true) {
        userEmailLogin.classList.add('is-valid')
        userEmailLogin.classList.remove('is-invalid')
        return true
    } else {
        userEmailLogin.classList.remove('is-valid')
        userEmailLogin.classList.add('is-invalid')
        return false
    }
}
function validationEmail() {
    let emailValid = userEmail.value
    let pattern = /^\S+@\S+\.\S+$/;
    if (pattern.test(emailValid) == true) {
        userEmail.classList.add('is-valid')
        userEmail.classList.remove('is-invalid')
        return true
    } else {
        userEmail.classList.remove('is-valid')
        userEmail.classList.add('is-invalid')
        return false
    }
}
function validationPass() {
    let passValid = userPass.value
    let pattern = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/;
    if (pattern.test(passValid) == true) {
        userPass.classList.add('is-valid')
        userPass.classList.remove('is-invalid')
        return true
    } else {
        userPass.classList.remove('is-valid')
        userPass.classList.add('is-invalid')
        return false
    }
}
function validationPassLogin() {
    let passValid = userPassLogin.value
    let pattern = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/;
    if (pattern.test(passValid) == true) {
        userPassLogin.classList.add('is-valid')
        userPassLogin.classList.remove('is-invalid')
        return true
    } else {
        userPassLogin.classList.remove('is-valid')
        userPassLogin.classList.add('is-invalid')
        return false
    }
}

