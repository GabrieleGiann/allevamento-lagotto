export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-truffle text-cream/70 py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row gap-4 justify-between items-center text-sm">
        <p className="font-heading text-cream text-base">
          🐾 Allevamento Lagotto Romagnolo da Tartufo
        </p>
        <p>&copy; {year} · Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}
