document.querySelector('.love input').addEventListener('change', function() {
    document.body.classList.toggle('dark-theme', this.checked);
});


let registerBtn = document.querySelector('.regestration');


    registerBtn.addEventListener("click", function () {
        // Переходимо на сторінку реєстрації
        window.location.assign('reg.html');
    })

