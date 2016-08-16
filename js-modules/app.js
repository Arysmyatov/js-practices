function App() {

    var args     = Array.prototype.slice.call(arguments);
    var callback = args.pop();
    var modules  = (args[0] && typeof args[0] == "string") ? args : args[0];
    var i = 0;

    if (!(this instanceof App)) {
        return new App(modules, callback);
    }

    this.productName = "Person behaviour modules";
    this.version = "1.0.0.0";

    if (!modules || modules === "*") {
        modules = [];
        for (i in App.modules) {
            if (App.modules.hasOwnProperty(i)) {
                modules.push(i)
            }
        }
    }

    for (i = 0; i < modules.length; i++) {
        App.modules[modules[i]](this);
    }

    callback(this);
}

App.modules = {}