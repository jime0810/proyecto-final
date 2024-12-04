const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const imagenes = document.querySelector('.imagenes')

prev.addEventListener('click', () => {
    imagenes.scrollLeft -= 300
})

next.addEventListener('click', () => {
    imagenes.scrollLeft += 300
})

function changeTab(tab) {
    // revisar cambio de pestaña
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (tab === 'login') {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    } else {
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    }
}

// 
window.onload = function() {
    changeTab('login');
};

document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        alert("¡Producto añadido al carrito!");
    });
});