export const metadata = {
  title: "shiroDiff Test",
  description: "Minimal app for testing shiroDiff visual regression bot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
