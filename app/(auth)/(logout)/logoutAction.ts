'use server';

import { signOut } from '@/auth';

export default async function logoutAction() {
  await signOut();
}
