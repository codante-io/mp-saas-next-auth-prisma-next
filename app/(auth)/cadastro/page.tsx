import { Button } from '@/components/ui/button';
import Form from 'next/form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import registerAction from './registerAction';

export default async function RegisterPage() {
  return (
    <>
      <Card className="max-w-sm w-full rounded-2xl mt-12">
        <CardHeader>
          <h2 className="text-xl font-bold">Cadastre-se</h2>
          <CardDescription>Faça seu cadastro gratuitamente.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form action={registerAction}>
            <div>
              <Label>Nome</Label>
              <Input type="text" name="name" placeholder="Fulano de Tal" />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" name="email" placeholder="eu@exemplo.com" />
            </div>
            <div>
              <Label>Senha</Label>
              <Input type="password" name="password" placeholder="********" />
            </div>
            <div>
              <Button className="w-full mt-6" type="submit">
                Registrar
              </Button>
            </div>
          </Form>
        </CardContent>
      </Card>
      <p className="text-sm text-muted-foreground mt-3">
        Já possui cadastro?{' '}
        <Link className="text-gray-800 hover:underline" href="/login">
          Faça o login
        </Link>
        .
      </p>
    </>
  );
}
