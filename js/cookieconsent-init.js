function loadGA() {
    const key = 'G-2MSPKGY2RV';
    if (key) {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', key);
    }
}

$(document).ready(function() {
    window.cookieconsent.initialise({
        palette: {
          popup: {
            background: '#292e4b',
          },
          button: {
            background: '#dda0bc'
          }
        },
        cookie: {
            domain: window.location.hostname
        },
        theme: 'edgeless',
        type: 'opt-in',
        content: {
            message: 'Desajuste Creativo utiliza cookies para brindarte una mejor experiencia.',
            allow: 'Aceptar',
            deny: 'Rechazar',
            link: 'Política de privacidad',
            policy: 'Uso de cookies',   
            href: '/privacy/'
        },
        onStatusChange: function() {
            if (this.hasConsented()) {
                loadGA();
            }
        },
        onInitialise: function() {
            if (this.hasConsented()) {
                loadGA();
            }
        }
    });
});