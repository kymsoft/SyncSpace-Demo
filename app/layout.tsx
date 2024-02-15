
import './globals.css';

export const metadata = {
  title: {
    absolute: "",
    default: "Home - SyncSpace",
    template: "%s | SyncSpace"
  },
  description: 'Final Year Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
