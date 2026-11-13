export default function Logo() {
  return (
    <a href="#home" className="flex items-center shrink-0" aria-label="ORADO Home">
      <img
        src="/logo.png"
        alt="ORADO"
        className="h-12 w-auto max-w-[220px] object-contain"
      />
    </a>
  );
}
