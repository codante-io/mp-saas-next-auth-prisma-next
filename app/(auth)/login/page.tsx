import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import Link from 'next/link';
import LoginForm from './login-form';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const session = await auth();
  if (session) {
    return redirect('/dashboard');
  }

  return (
    <>
      <Card className="max-w-sm w-full rounded-2xl mt-12">
        <CardHeader>
          <h2 className="text-xl font-bold">Boas Vindas</h2>
          <CardDescription>Faça seu login com email e senha.</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
      <p className="text-sm text-muted-foreground mt-3">
        Não possui cadastro?{' '}
        <Link className="text-gray-800 hover:underline" href="/cadastro">
          Registre-se
        </Link>
        .
      </p>
    </>
  );
}
