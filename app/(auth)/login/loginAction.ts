'use server';

import { signIn } from '@/auth';
import { isRedirectError } from 'next/dist/client/components/redirect';
import { redirect } from 'next/navigation';

export default async function loginAction(_prevState: any, formData: FormData) {
  try {
    await signIn('credentials', {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      redirect: true,
      redirectTo: '/dashboard',
    });
  } catch (e: any) {
    if (isRedirectError(e)) {
      throw e;
    }

    if (e.type === 'CredentialsSignin') {
      return { success: false, message: 'Dados de login incorretos.' };
    }
    console.error(e);
    return { success: false, message: 'Ops, algum erro aconteceu!' };
  }
}
