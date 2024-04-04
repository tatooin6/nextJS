import { redirect } from 'next/navigation';

export default function HomePage() {

  redirect('dashboard/counter');
  
  // The code below won't be executed because it is being redirected.
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
    </main>
  );
}
