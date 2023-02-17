/**
 * Ejemplo de entidad de dominio para un usuario
 */
  export class User {
    constructor(
      public id: number,
      public name: string,
      public description: string,
      public response: string,
      public created_at: Date,
      public updated_at: Date,
      public deleted_at: Date,
    ) {}
  }


