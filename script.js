const container = document.querySelector('.container');
const signupbtn = document.querySelector('.signup header');
const loginbtn = document.querySelector('.login header');

loginbtn.addEventListener('click', () => {
    container.classList.add('active');
});
signupbtn.addEventListener('click', () => {
    container.classList.remove('active');
});