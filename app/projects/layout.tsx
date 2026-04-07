import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevTracy 👨‍💻",
  description: "Projects || DevTracy",
};

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
