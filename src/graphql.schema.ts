
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class Pet {
    id: string;
    name?: string;
    age?: number;
    createdAt?: string;
    updatedAt?: string;
    user?: User;
}

export abstract class IQuery {
    abstract getPets(): Pet[] | Promise<Pet[]>;
}

export class User {
    id?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
    email?: string;
    phone?: string;
}
