import Mainheader from "@/component/main-header/main-header";
import "./globals.css";

export const metadata = {
  title: "Foodie",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Mainheader />
        {children}
      </body>
    </html>
  );
}
