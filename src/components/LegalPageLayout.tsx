import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const LegalPageLayout = ({ title, lastUpdated, children }: LegalPageLayoutProps) => (
  <>
    <TopBar />
    <Navbar />
    <section className="py-16 lg:py-24">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-border">
          <h1 className="text-4xl lg:text-5xl font-extrabold font-heading mb-3">{title}</h1>
          <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
        </div>
        {/* Content */}
        <div className="space-y-8">
          {children}
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export const LegalSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-card border border-border rounded-xl p-6 lg:p-8">
    <h2 className="font-heading font-bold text-xl mb-4 text-foreground">{title}</h2>
    <div className="text-muted-foreground space-y-3 text-sm leading-relaxed">{children}</div>
  </div>
);

export default LegalPageLayout;
