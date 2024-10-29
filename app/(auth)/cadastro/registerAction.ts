'use server';

import db from '@/lib/db';
import { hashSync } from 'bcrypt-ts';

export default async function registerAction(formData: FormData) {
  const entries = Array.from(formData.entries());
  const data = Object.fromEntries(entries) as {
    name: string;
    email: string;
    password: string;
  };

  console.log('==== Server Action Register User ====');
  console.log(data);

  // se não tiver email, nome ou senha, retorna erro
  if (!data.email || !data.name || !data.password) {
    throw new Error('Você precisa passar todos os dados!');
  }

  // se um usuário já existe.
  const user = await db.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (user) {
    throw new Error('Usuário já existe');
  }

  // se não existir, cria o usuário
  await db.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: hashSync(data.password),
    },
  });
}
