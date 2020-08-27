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
  | "USER_ALREADY_SIGNED"
  | "USER_NOT_FOUND"
  | "WRONG_PASSWORD";

const User: { [code in UserCode]: ErrorType } = {
  USER_ALREADY_SIGNED: {
    code: "USER_ALREADY_SIGNED",
    message: "Usuário já cadastrado.",
  },
  USER_NOT_FOUND: {
    code: "USER_NOT_FOUND",
    message: "Usuário não encontrado.",
  },
  WRONG_PASSWORD: {
    code: "WRONG_PASSWORD",
    message: "Senha incorreta.",
  },
};

type StationCode =
  | "STATION_ALREADY_SIGNED"
  | "STATION_NOT_FOUND"

const Station: { [code in StationCode]: ErrorType } = {
  STATION_ALREADY_SIGNED: {
    code: "STATION_ALREADY_SIGNED",
    message: "Estação já cadastrado.",
  },
  STATION_NOT_FOUND: {
    code: "STATION_NOT_FOUND",
    message: "Estação não encontrado.",
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
  Station,
  Token,
};

export default ErrorCode;
