import Header from "@component_rooms/header/ui_header";

export default function RoomsLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Area Header */}
        <Header />
        {children}
      </body>
    </html>
  );
}
