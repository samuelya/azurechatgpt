import { ProtectedPage } from "@/features/auth/protected-page";
import { MainMenu } from "@/features/menu/menu";

export const metadata = {
  title: "SamChat",
  description: "SamChat",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedPage>
      <MainMenu />
      <div className="flex-1">{children}</div>
    </ProtectedPage>
  );
}
