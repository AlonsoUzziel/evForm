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
        }, {
            name: 'phone', msg: 'Ingresa un número telefónico', evaluate: function (e){               
                let t = new RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)
                return !t.test(e.value) && (e.value = e.value.replace(/[A-Za-z\s]+/g,''), !0)
            }
        }, {
            name: 'rfc', msg: 'Ingresa un RFC válido', evaluate: function (e){               
                let t = new RegExp(/[A-ZÑ&]{3,4}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])(?:[A-Z\d]{3})/)
                return !t.test(e.value)
            }
        }, {
            name: 'url', msg: 'Ingresa una URL válida', evaluate: function (e){               
                let t = new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g)
                return !t.test(e.value)
            }
        }, {
            name: 'email', msg: 'Ingresa un email válido', evaluate: function (e){               
                let t = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i)
                return !t.test(e.value)
            }
        }, {
            name: 'ip', msg: 'Ingresa un IP válida', evaluate: function (e){               
                let t = new RegExp(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/i)
                return !t.test(e.value)
            }
        } , {
            name: 'curp', msg: 'Ingresa un CURP válido', evaluate: function (e){               
                let t = new RegExp(/^([A-Z&]|[a-z&]{1})([AEIOU]|[aeiou]{1})([A-Z&]|[a-z&]{1})([A-Z&]|[a-z&]{1})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([HM]|[hm]{1})([AS|as|BC|bc|BS|bs|CC|cc|CS|cs|CH|ch|CL|cl|CM|cm|DF|df|DG|dg|GT|gt|GR|gr|HG|hg|JC|jc|MC|mc|MN|mn|MS|ms|NT|nt|NL|nl|OC|oc|PL|pl|QT|qt|QR|qr|SP|sp|SL|sl|SR|sr|TC|tc|TS|ts|TL|tl|VZ|vz|YN|yn|ZS|zs|NE|ne]{2})([^A|a|E|e|I|i|O|o|U|u]{1})([^A|a|E|e|I|i|O|o|U|u]{1})([^A|a|E|e|I|i|O|o|U|u]{1})([0-9]{2})$/g)
                return !t.test(e.value)
            }
        }  
                          
                          // ^([A-Z&]|[a-z&]{1})([AEIOU]|[aeiou]{1})([A-Z&]|[a-z&]{1})([A-Z&]|[a-z&]{1})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([HM]|[hm]{1})([AS|as|BC|bc|BS|bs|CC|cc|CS|cs|CH|ch|CL|cl|CM|cm|DF|df|DG|dg|GT|gt|GR|gr|HG|hg|JC|jc|MC|mc|MN|mn|MS|ms|NT|nt|NL|nl|OC|oc|PL|pl|QT|qt|QR|qr|SP|sp|SL|sl|SR|sr|TC|tc|TS|ts|TL|tl|VZ|vz|YN|yn|ZS|zs|NE|ne]{2})([^A|a|E|e|I|i|O|o|U|u]{1})([^A|a|E|e|I|i|O|o|U|u]{1})([^A|a|E|e|I|i|O|o|U|u]{1})([0-9]{2})$
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
