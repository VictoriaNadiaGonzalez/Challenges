import { User } from "./FirstChallengeUser";

export class ValidationError extends Error {
  constructor(errors: string[]) {
    const message = "Validation errors found:";
    super(`${message}\n${errors.join("\n")}`);
    this.name = "ValidationError";
  }
}

export class UserValidator {
  public static validate(user: User) {
    let errors: string[] = [];

    if (!user.name || user.name.trim() === "") {
      errors.push("Username is required");
    }

    if (!validateEmail(user.email)) {
      errors.push("Email is not valid");
    }

    if (!user.password || user.password.length < 8) {
      errors.push("Password must be at least 8 characters long");
    }

    if (errors.length > 0) {
      throw new ValidationError(errors);
    }
    {
      return true;
    }
  }
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Explanation of the regular expression
// ^ indicates the start of the string.
// [^\s@]+ represents one or more characters that are not whitespace or the @ symbol. This ensures that there is at least one character before the @ symbol.
// @ is the at symbol, which must be present in the email address.
// [^\s@]+ again represents one or more characters that are not whitespace or the @ symbol. This ensures that there is at least one character between the @ symbol and the dot . in the domain of the email.
// . is the literal dot in the email domain. We use the backslash \ to escape the special character . and treat it as a literal character in the regular expression.
// [^\s@]+ once again represents one or more characters that are not whitespace or the @ symbol. This ensures that there is at least one character after the dot . in the domain of the email.
// $ indicates the end of the string.
