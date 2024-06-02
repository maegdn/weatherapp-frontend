// Insert your code here

const registerButton = document.querySelector('#register');

registerButton.addEventListener('click', () => {
    const User = {
        name: document.querySelector('#registerName').value,
        email: document.querySelector('#registerEmail').value,
        name: document.querySelector('#registerPassword').value,
    }
fetch('https://weatherapp-backend-xi-two.vercel.app/users/signup',
{method: 'POST',
headers: {'Content-Type': 'application/json'},
body: JSON.stringify(User)})
.then(response => response.json({result: true}))
.then(data =>  {
    window.location.assign('index.html')})

})

const connectionButton = document.querySelector('#connection');

connectionButton.addEventListener('click', ()=>{
    const User = {
        email: document.querySelector('#connectionEmail').value,
        password: document.querySelector('#connectionPassword').value
    }
fetch('https://weatherapp-backend-xi-two.vercel.app/users/signin', {method: 'POST', headers:{'Content-Type' : 'appliccation/json'}, body: JSON.stringify(User) })
.then(response => response.json())
.then(data => {
    window.location.assign('index.html')
})
}) 