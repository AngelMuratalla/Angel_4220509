let tareas = [];

function mostrarMenu() {
    return parseInt(prompt(`
        Opciones disponibles:
        1.- Agregar tareas
        2.- Ver todas las tareas
        3.- Marcar tareas como completadas
        4.- Salir
    `));
}

function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("Opción no válida, intenta nuevamente");
        }
    }
    alert("Programa finalizado");
}

function agregarTarea() {
    let nombre = prompt("Ingresa el nombre de la tarea");
    if (nombre) {
        let tarea = {
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);
        alert("La tarea ha sido agregada");
    } else {
        alert("El nombre es obligatorio");
        agregarTarea();
    }
}

function verTareas() {
    if (tareas.length == 0) {
        alert("No hay tareas en la lista");
    } else {
        let mensaje = "Lista de tareas:\n";
        tareas.forEach(t => {
            mensaje += t.nombre + "\n";
        });
        alert(mensaje);
    }
}

function marcarTareaCompletada() {
    tareas = []
    alert("Tareas completadas :) ")
}

iniciarPrograma();
