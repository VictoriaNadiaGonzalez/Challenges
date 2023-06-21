import { User } from "./User";
import { UserValidator } from "./UserValidator";
import { UserRepository } from "./UserRepository";

const user = new User("name", "email", "password");

if(UserValidator.validate(user) ) {
    UserRepository.save(user)
    console.log('Usuario creado correctamente')
}



