let icons = document.getElementById('icons')

icons.onclick = function(){
    document.body.classList.toggle('dark-theme')
    if(document.body.classList.contains('dark-theme')){
        icons.src = 'icons/icons8-sun.gif'
    }
    else{
        icons.src = 'icons/icons8-moon-48.png'
    }
}