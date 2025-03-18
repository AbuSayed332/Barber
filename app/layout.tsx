import ClientProviders from '@/components/shared/client-providers';
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/lib/constants'
import { Metadata } from 'next'



// Example of a valid layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}


export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`, // Ensure APP_NAME is correctly defined and imported
    default: `${APP_NAME} | ${APP_SLOGAN}`, // Replaced the dot with a pipe separator
  },
  description: APP_DESCRIPTION, // Ensure APP_DESCRIPTION is valid and imported properly
}
