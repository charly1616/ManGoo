function lightenColor(hexColor, percent) {
    // Validar el color de entrada
    if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexColor)) {
      throw new Error('Formato de color hexadecimal inválido');
    }
  
    // Convertir porcentaje a decimal (0-1)
    const factor = Math.min(1, Math.max(0, percent / 100));
  
    // Expandir formato corto (#RGB) a completo (#RRGGBB)
    let fullHex = hexColor.slice(1);
    if (fullHex.length === 3) {
      fullHex = fullHex.split('').map(c => c + c).join('');
    }
  
    // Convertir a valores RGB
    let r = parseInt(fullHex.substring(0, 2), 16);
    let g = parseInt(fullHex.substring(2, 4), 16);
    let b = parseInt(fullHex.substring(4, 6), 16);
  
    // Aclarar cada componente
    r = Math.round(r + (255 - r) * factor);
    g = Math.round(g + (255 - g) * factor);
    b = Math.round(b + (255 - b) * factor);
  
    // Convertir de nuevo a hexadecimal
    const toHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
  
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }



  export default lightenColor;