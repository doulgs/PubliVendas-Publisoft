import { ObjectSchema } from "realm";

export const UserSchema: ObjectSchema = {
  name: "UserSchema",

  properties: {
    Handle: "int",
    Nome: { type: "string", optional: true },
    Login: { type: "string", optional: true },
    Password: { type: "string", optional: true },
    Ativo: { type: "int", optional: true },
    EhAdministrador: { type: "string", optional: true },
    created_at: { type: "date", optional: true },
    updated_at: { type: "date", optional: true },
  },

  primaryKey: "Handle",
};
