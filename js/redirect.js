let installButtons = document.querySelectorAll('.install-btn')


for(let installButton of installButtons) {
    installButton.addEventListener('click', event => {
        event.preventDefault(   )
        if(navigator.userAgent.toLowerCase().indexOf("android") > -1){
            window.location.href = 'https://play.google.com/store/apps/details?id=com.notif.universe';
        }
        if(navigator.userAgent.toLowerCase().indexOf("iphone") > -1){
            window.location.href = 'https://apps.apple.com/uz/app/notif-uz/id1643760116';
        }
    })
}