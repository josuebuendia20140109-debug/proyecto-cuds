let personas = [];
let miGrafica;

function guardar() {
    let nombre = document.getElementById("nombreproducto").value;
    let marca = document.getElementById("marcaproducto").value;
    let code = document.getElementById("codigobarra").value;
    let cantidad = document.getElementById("cantidad").value;   
    let precio = document.getElementById("precio").value;

    if (nombre === "" || marca === "" || code === "" || cantidad === "" || precio === "") {
        alert("Todos los campos son obligatorios");
        return;
    }

    let persona = {
        nombre: nombre,
        marca: marca,
        code: code,
        cantidad: cantidad,
        precio: precio
    };
    personas.push(persona);
    limpiar();
    mostrar();
}

function mostrar() {
    let tabla = document.getElementById("tabla");
    tabla.innerHTML = "";
    personas.forEach((p, i) => {
        tabla.innerHTML += `
            <tr>
                <td>${p.nombre}</td>
                <td>${p.marca}</td>
                <td>$${p.precio}</td>
                <td>${p.code}</td>
                <td>${p.cantidad}</td>
                <td class="text-center">
                    <button class="btn btn-info btn-sm" onclick="editar(${i})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="eliminar(${i})">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

function editar(i) {
    document.getElementById("nombreproducto").value = personas[i].nombre;
    document.getElementById("marcaproducto").value = personas[i].marca;
    document.getElementById("codigobarra").value = personas[i].code;
    document.getElementById("cantidad").value = personas[i].cantidad;
    document.getElementById("precio").value = personas[i].precio;
    document.getElementById("indice").value = i;
}

function actualizar() {
    let i = document.getElementById("indice").value;
    if (i === "") return alert("Seleccione un registro");

    personas[i] = {
        nombre: document.getElementById("nombreproducto").value,
        marca: document.getElementById("marcaproducto").value,
        code: document.getElementById("codigobarra").value,
        cantidad: Number(document.getElementById("cantidad").value),
        precio: document.getElementById("precio").value
    };
    limpiar();
    mostrar();
}

function eliminar(i) {
    if (confirm("¿Desea eliminar el registro?")) {
        personas.splice(i, 1);
        mostrar();
    }
}

function generarGrafico() {
    const ctx = document.getElementById('graficaPastel').getContext('2d');
    
    if (personas.length === 0) {
        alert("No hay datos para graficar");
        return;
    }

    if (miGrafica) {
        miGrafica.destroy();
    }
    
    miGrafica = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: personas.map(p => p.nombre),
            datasets: [{
                label: 'Stock de Productos',
                data: personas.map(p => p.cantidad),
                backgroundColor: ['#198754', '#0dcaf0', '#ffc107', '#dc3545', '#6610f2', '#fd7e14']
            }]
        },
        options: {
            responsive: true
        }
    });
}

function generarReporte() {
    if (personas.length === 0) return alert("No hay datos");
    window.print();
}

function limpiar() {
    document.getElementById("nombreproducto").value = "";
    document.getElementById("marcaproducto").value = "";
    document.getElementById("codigobarra").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("indice").value = "";
}