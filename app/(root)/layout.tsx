import MobileNav from '@/components/MobileNav';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';

/**
 * RootLayout is the main layout component for the application.
 * It wraps all other components and provides a consistent structure.
 *
 * @param children - The React children to be rendered within the layout.
 * @returns The RootLayout component with the provided children.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Simulated logged-in user data
  const loggedIn = { firstName: 'Adrian', lastName: 'JSM' };

  return (
    <main className="flex h-screen w-full font-inter">
      {/* Sidebar component with logged-in user data */}
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          {/* Logo image */}
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            {/* Mobile navigation component with logged-in user data */}
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {/* Render the provided children */}
        {children}
      </div>
    </main>
  );
}
