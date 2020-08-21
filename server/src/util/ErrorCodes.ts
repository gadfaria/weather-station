interface ErrorType {
  code: string;
  message: string;
}

type ServerCode = "SERVER_ERROR";

const Server: { [code in ServerCode]: ErrorType } = {
  SERVER_ERROR: {
    code: "SERVER_ERROR",
    message: "Erro interno do servidor.",
  },
};

type UserCode =
  | "NICKNAME_ALREADY_SIGNED"
  | "NICKNAME_NOT_FOUND"
  | "WRONG_PASSWORD";

const User: { [code in UserCode]: ErrorType } = {
  NICKNAME_ALREADY_SIGNED: {
    code: "NICKNAME_ALREADY_SIGNED",
    message: "Apelido já cadastrado.",
  },
  NICKNAME_NOT_FOUND: {
    code: "NICKNAME_NOT_FOUND",
    message: "Apelido não encontrado.",
  },
  WRONG_PASSWORD: {
    code: "WRONG_PASSWORD",
    message: "Senha incorreta.",
  },
};

type TokenCode = "INVALID_TOKEN";
const Token: { [code in TokenCode]: ErrorType } = {
  INVALID_TOKEN: {
    code: "INVALID_TOKEN",
    message: "Token inválido",
  },
};

const ErrorCode = {
  Server,
  User,
  Token,
};

export default ErrorCode;
