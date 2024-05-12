import { Header } from "../components/layout";

export default function LayoutProvider({ children }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
