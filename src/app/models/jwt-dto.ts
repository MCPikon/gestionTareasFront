// Clase para la entidad del token JWT
export class JwtDTO {
    token: string;
    
    constructor(token: string) {
        this.token = token;
    }
}
