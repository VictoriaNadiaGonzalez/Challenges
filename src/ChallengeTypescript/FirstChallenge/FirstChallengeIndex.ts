import { User } from "./FirstChallengeUser";
import { UserValidator } from "./FirstChallengeUserValidator";
import { UserRepository } from "./FirstChallngeUserRepository";

const user = new User("", "email", "pass");

if (UserValidator.validate(user)) {
  UserRepository.save(user);
  console.log("Usuario creado correctamente");
}


