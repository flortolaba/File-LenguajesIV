// Botón de lectura
document.getElementById("leer").addEventListener("click", leerArchivo);

function leerArchivo() {
  const input = document.getElementById("archivo");
  const file = input.files[0]; // Archivo seleccionado

  if (file) {
    // Mostramos propiedades del archivo
    document.getElementById("info").innerText =
      `Nombre: ${file.name}\nTamaño: ${file.size} bytes\nTipo: ${file.type}`;

    const reader = new FileReader();

    // Si es archivo de texto
    if (file.type.startsWith("text")) {
      reader.onload = function(e) {
        document.getElementById("contenido").innerText = e.target.result;
        document.getElementById("preview").style.display = "none";
      };
      reader.readAsText(file, "UTF-8");
    }

    // Si es imagen
    else if (file.type.startsWith("image")) {
      reader.onload = function(e) {
        document.getElementById("preview").src = e.target.result;
        document.getElementById("preview").style.display = "block";
        document.getElementById("contenido").innerText = "";
      };
      reader.readAsDataURL(file);
    }

    // Otro tipo de archivo
    else {
      document.getElementById("contenido").innerText =
        "No se puede mostrar este tipo de archivo.";
      document.getElementById("preview").style.display = "none";
    }

  } else {
    alert("Por favor selecciona un archivo.");
  }
}
