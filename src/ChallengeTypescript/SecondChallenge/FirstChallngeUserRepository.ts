import { User } from "../FirstChallenge/FirstChallengeUser";
import prisma from "./prisma";

export class UserRepository {
  public static async save(user: User): Promise<User> {
    const createdUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    return createdUser;
  }
}

