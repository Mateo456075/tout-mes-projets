const info = document.querySelector('.info')
const allBtns = document.querySelectorAll('input[type=button]')

function val(resulta) {
    form.fenetre.value = form.fenetre.value + resulta
}

function calcule(){
    if(form.fenetre.value==""){
        info.innerText = 'Veuillez écrire un chiffre';
        allBtns.forEach(btn => {
            btn.addEventListener('click', function(){
                info.innerText = ""
            })
        })
    }else {
        form.fenetre.value = eval(form.fenetre.value)
    }
}

function suppr(){
    form.fenetre.value = ""
}
