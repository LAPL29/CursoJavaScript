
import { User } from '../models/user'
/**
 * 
 * @param {User} user 
 */

//Por si ocurren cambios de la base con esto se puede arreglar facil mente

export const userModelToLocalHost = (user) => {
    const {
        avatar,
        balance,
        firstName,
        gender,
        id,
        isActive,
        lastName
    } = user;

    return {
        avatar,
        balance,
        first_name: firstName,
        gender,
        id,
        isActive,
        last_name: lastName,
    }
}