document.addEventListener("DOMContentLoaded", () => {

    const obtenerDatos = async () => {
        const horaActual = new Date().getTime();
        const datosAlmacenados = JSON.parse(localStorage.getItem("datosUsuario"))

        if (datosAlmacenados && horaActual - datosAlmacenados.timestamp < 60000) {
            mostrarDatosUsuario(datosAlmacenados.data);
        } else {
            try {
                const response = await fetch("https://reqres.in/api/users?delay=3");
                const data = await response.json();
                localStorage.setItem("datosUsuario", JSON.stringify({
                    data: data.data,
                    timestamp: horaActual
                }));
                mostrarDatosUsuario(data.data);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        }
    };


    const mostrarDatosUsuario = (datosUsuario) => {
        const datosApi = document.getElementById("datosApi");
        datosApi.innerHTML = "";
        datosUsuario.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${user.id}</td>
            <td><img src="${user.avatar}" alt="Avatar" class="avatar"></td>
            <td>${user.first_name} ${user.last_name}</td>
            <td>${user.email}</td>
            `;
            datosApi.appendChild(row);
        });
    };
    obtenerDatos();
});