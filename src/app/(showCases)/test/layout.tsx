// /app/(main)/layout.tsx
import Sidebar from '@/components/layout/Sidebar';
import { logout } from '@/actions/auth';
import { signOut } from 'next-auth/react';
import { SessionGuard } from '@/components/SessionGuard/SessionGuard';
import Header from './components/Header';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex w-[100vw] flex-col gap-4">
      <Header />
      {children}
    </main>
  );
}
