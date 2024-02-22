export const createError = (status, message) => {
    const error = new Error() // Crée une nouvelle instance d'erreur vide
    
    error.status = status // Définit le code d'état de l'erreur e  fonction du paramètre "status"
    
    error.message = message // Définit le message d'erreur en fonction du paramètre "message"
    
    return error  // Renvoie l'instance d'erreur personnalisée
    }