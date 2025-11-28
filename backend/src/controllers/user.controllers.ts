import type { Request, Response } from "express";

import type { User } from "types/user";

export const getUsers = async (
  req: Request<User>,
  res: Response
): Promise<void> => {
  const { nome, password } = req.body;

  try {
    const result = {
      rows = ["teste"],
    };

    if (result.rows.length) {
      const user = result.rows[0];

      if (!user) {
        res.status(401).json({ autenticado: false });
        return;
      }
      const { id, nome, email } = user;

      res.status(200).json({
        autenticado: true,s
        usuario: {
          id,
          nome,
          email,
        },
      });
    } else {
      res.status(401).json({ autenticado: false });
    }
  } catch (err) {
    console.error("Erro ao verificar usuário:", err);
    res.status(500).json({ erro: "Erro no servidor" });
  }
};
