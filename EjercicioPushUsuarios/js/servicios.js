(function() {
    function login() {

        return ejercicionuevoClient.login("facebook");
    }

    function getFacebookDetalis() {
        
        return ejercicionuevoClient.invokeApi("usuarios",
   { method: "get" });

    }

    function notificar(mensaje) {
        
        return ejercicionuevoClient
                       .invokeApi("notifyAllUsers", { body: { toast: mensaje } });

    }

    WinJS.Namespace.define("Servicios", {
        Login: login,
        GetFacebookDetails: getFacebookDetalis,
        Notificar: notificar
    });
})();