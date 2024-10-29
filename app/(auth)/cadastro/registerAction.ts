'use server';

import db from '@/lib/db';
import { hashSync } from 'bcrypt-ts';
import { redirect } from 'next/navigation';

export default async function registerAction(
  _prevState: any,
  formData: FormData
) {
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
    return {
      message: 'Preencha todos os campos',
      success: false,
    };
  }

  // se um usuário já existe.
  const user = await db.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (user) {
    return {
      message: 'Este usuário já existe',
      success: false,
    };
  }

  // se não existir, cria o usuário
  await db.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: hashSync(data.password),
    },
  });

  return redirect('/');
}
