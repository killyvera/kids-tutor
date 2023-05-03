function titleToLink(element) {
    // Reemplazar espacios con guiones
    const link = element.name.trim().replace(/\s+/g, "-").toLowerCase();
  
    return link;
  }

  export default titleToLink
