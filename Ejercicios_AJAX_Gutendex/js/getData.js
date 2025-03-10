const gridContainer = document.getElementById("grid-section")

fetch("https://gutendex.com/books/")
    .then(function getResponse(response) {
        return response.json()
    })
    .then(function printObject(data) {
        let results = data.results

        //UTILICÉ UNA VISTA TIPO GRID. PUSE UNA TEXTAREA PARA EL TÍTULO PARA QUE CUADRASEN MEJOR LAS IMÁGENES
        //ES ALGO RESPONSIVE
        for (let i = 0; i < data.results.length; i++) {
            gridContainer.innerHTML = gridContainer.innerHTML +
                `<book>
                <div class="img-container">
                <img src = "https://www.gutenberg.org/cache/epub/${results[i].id}/pg${results[i].id}.cover.medium.jpg" alt="Avatar">
                </div>
                <div class="text">
            <div><h3>Título</h3>
        <textarea rows="4" maxlength="20" readonly>${data.results[i].title}</textarea></div>
        <h3>Autor</h3>
        <p>${results[i].authors[0].name}</p>
      </div>
      </book>`
        }
    })


//1. Proyecto Guttenberg: Haz una llamada a la API gutendex.com/books para que devuelta todos los libros. Muestra en cards las portadas y los títulos y autores.
