(function () {
    "use strict";

    function login() {
        Servicios.Login().done(function() {
            Servicios.GetFacebookDetails().done(function(res) {
                var obj = JSON.parse(res.response);
                var msg = "Ha llegado " + obj.name;
                Servicios.Notificar(msg).done(function() {});
            });

        });
    }


    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            document.getElementById("btnLogin").
                addEventListener("click", login);
        }
    });
})();
