
import TopInformationBar from './TopInformationBar';
import MainNavigation from './MainNavigation';
import MobileNavigation from './MobileNavigation';

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <TopInformationBar />

      {/* Desktop header — unchanged */}
      <div className="hidden lg:block">
        <MainNavigation />
      </div>

      {/* Mobile header and certificates are handled by MobileNavigation */}
      <MobileNavigation />
    </header>
  );
}
