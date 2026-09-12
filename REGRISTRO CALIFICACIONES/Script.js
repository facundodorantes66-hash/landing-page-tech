// Recuperar registros guardados en localStorage (o iniciar vacío)
let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];

const formulario = document.getElementById('formulario');
const listaAlumnos = document.getElementById('listaAlumnos');

// Mostrar los registros al cargar la página
mostrarAlumnos();

formulario.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que la página se recargue

    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const matematicas = parseFloat(document.getElementById('matematicas').value);
    const espanol = parseFloat(document.getElementById('espanol').value);
    const historia = parseFloat(document.getElementById('historia').value);

    // Calcular el promedio
    const promedio = (matematicas + espanol + historia) / 3;

    // Determinar el estado
    const estado = promedio >= 6 ? 'Aprobado' : 'Reprobado';

    // Crear objeto alumno
    const nuevoAlumno = {
        nombre,
        matematicas,
        espanol,
        historia,
        promedio: promedio.toFixed(1),
        estado
    };

    // Agregar al arreglo
    alumnos.push(nuevoAlumno);

    // Guardar en localStorage
    localStorage.setItem('alumnos', JSON.stringify(alumnos));

    // Limpiar el formulario
    formulario.reset();

    // Mostrar los registros actualizados
    mostrarAlumnos();
});

function mostrarAlumnos() {
    if (alumnos.length === 0) {
        listaAlumnos.innerHTML = '<p class="sin-registros">Aún no hay alumnos registrados.</p>';
        return;
    }

    // Construir tabla
    let html = `
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Matemáticas</th>
                    <th>Español</th>
                    <th>Historia</th>
                    <th>Promedio</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
    `;

    alumnos.forEach(alumno => {
        const claseEstado = alumno.estado === 'Aprobado' ? 'aprobado' : 'reprobado';
        html += `
            <tr>
                <td>${alumno.nombre}</td>
                <td>${alumno.matematicas}</td>
                <td>${alumno.espanol}</td>
                <td>${alumno.historia}</td>
                <td>${alumno.promedio}</td>
                <td class="${claseEstado}">${alumno.estado}</td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    listaAlumnos.innerHTML = html;
}