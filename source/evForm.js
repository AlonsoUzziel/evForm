class O { //Observer
    constructor()
    {
        this.o = []// Objects
    }
    s(e) { // Subscribe
        this.o.push(e)
    }
    u(t) { // Unsubscribe
        this.o = this.o.filter(e => !(e instanceof t))
    }
    notify(t) {
        this.o.forEach(e => {
            e.n(t)
        })
    }
}

class EvForm extends O {
    constructor() {
        super()
        this.input = null
        this.errors = 0
        this.evaluates = [{
            name: "postalCode",
            msg: "Ingresa 5 digitos",
            evaluate: function (e) {
                return e.value.length <= 4 || (5 < e.value.length && (e.value = Number(e.value.toString().slice(0, -1))), !1)
            }
        }, {
            name: "number", msg: "Ingresa un número", evaluate: function (e) {
                let t = new RegExp(/^[0-9\s]+$/i);
                return !t.test(e.value) && (e.value = e.value.replace(/\D/g, ""), !0)
            }
        }, {
            name: "require", msg: "Este campo es requerido", evaluate: function (e) {
                return "" === e.value.replace(/\s/g, "")
            }
        }, {
            name: "letters", msg: "Ingresa solo letras", evaluate: function (e) {
                let t = new RegExp(/^[a-zA-Z\s]+$/g);
                return !t.test(e.value) && (e.value = e.value.replace(/[0-9]+/g, ""), !0)
            }
        }, {
            name: "requireCheck", msg: "Este campo es obligatorio ", evaluate: function (e) {
                return !1 === e.checked
            }
        }]
    }
    notify(t) {
        super.notify(t);
        for (var a = this.evaluates.filter(e => t.classList.contains(e.name)), r = 0, e = a.length; r < e; r += 1) {
            let e = a[r];
            e.evaluate(t) ? this.newMsg(t, e.msg, e.name) : this.rmMsg(t, e.name)
        }
    }
    gNS = function (e, t) { // getNextSibling
        let a = e.nextElementSibling;
        for (; a;) {
            if (a.matches(t)) return a;
            a = a.nextElementSibling
        }
    };
    getErrors() {
        return this.errors
    }
    newMsg(t, a, r) {
        if (void 0 === this.gNS(t, "." + r)) {
            let e = document.createElement("span");
            e.textContent = a, e.classList.add("error", r), t.parentNode.appendChild(e), t.classList.add("errorInput"), this.errors++
        }
    }
    rmMsg(e, t) {
        let a = this.gNS(e, "." + t);
        void 0 !== a && a.classList.contains(t) && (a.remove(), e.classList.remove("errorInput"), this.errors--)
    }
}

let evForm = new EvForm(), toValidate;
function registerValidate(e, t) {
    return (toValidate = document.querySelectorAll("#" + e + " input")).forEach(e => e.addEventListener("input", e => {
        if (evForm.notify(e.target), 0 === evForm.getErrors()) {
            let e = document.getElementById(t);
            e.classList.remove("disabled")
        }
    })), new Promise((t, e) => {
        toValidate.forEach(function (e) {
            evForm.notify(e), t()
        })
    })
}
