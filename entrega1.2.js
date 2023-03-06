// N1 Ejercicio 1

const sumaNombre = ((nom1 , nom2)=> {return nom1+nom2  })("juan","pedro")

console.log(sumaNombre)

// N2 Ejercicio 1

const persona = (nom) => {return { nombre :nom , 
                                nick: nom.replace(" ","").toLowerCase() + nom.length}}


// N2 Ejercicio 2

class Persona{
    constructor(nom){
        this.nom = nom;
    }

    dirNom () {console.log(`Nombre: ${this.nom}`)}

}


const x = new Persona("Agustin")

x.dirNom()

// N3 Ejercicio 1

class Staff {
    constructor(departamento){
        if(this.constructor == Staff){
            throw new Error ("objeto de clase abstracta , no puede ser creado") 
         }
         this.departamento = departamento
        }

  
}

class Empleado extends Staff{
    constructor(departamento , name , puesto , email){
        super(departamento)
        this.name = name
        this.puesto = puesto
        this.email = email
    }
    }

var empleadojg = new Empleado("ventas","Juan Garcia","Adminstrativo","jg@email.com")
var empleadolp = new Empleado("compras","Laura perez","director","lp@email.com")
var empleadomg = new Empleado("finanzas","Maria Garcia","manager","mag@email.com")



