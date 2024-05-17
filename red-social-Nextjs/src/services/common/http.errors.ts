export class AccesoDenegado extends Error {
    constructor(message: string){
        super(message)
        this.name='AccesoDenegado'
    }
}

export class ConflictError extends Error {
    constructor(message: string){
        super(message)
        this.name='AccesoDenegado'
    }
}