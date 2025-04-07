
const theurl = 'https://exercisedb.p.rapidapi.com/exercises?limit=2000&offset=0';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '1e9db25aa8msh37c0dc0d45740eep1a7d68jsnfd69dfbc7440',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};


const fs = require('fs');

async function downloadJSON() {
  try {
    
    // 2. Hacer la petición HTTP
    const response = await fetch(theurl, options);
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    // 3. Obtener los datos JSON
    const jsonData = await response.json();

    // 4. Guardar en un archivo local
    const filePath = './downloaded_data.json';
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
    
    console.log(`Archivo guardado correctamente en: ${filePath}`);

  } catch (error) {
    console.error('Error al descargar el JSON:', error);
  }
}

// Ejecutar la función
downloadJSON();