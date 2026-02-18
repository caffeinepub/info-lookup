import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { NumberInfoPanel } from '@/components/lookup/NumberInfoPanel';
import { VehicleInfoPanel } from '@/components/lookup/VehicleInfoPanel';
import { Terminal } from 'lucide-react';

export default function App() {
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'info-lookup'
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Background image */}
      <div 
        className="fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url(/assets/generated/hacker-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Header */}
      <header className="relative z-10 border-b border-border/50 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center gap-3">
          <img 
            src="/assets/generated/hacker-mark.dim_256x256.png" 
            alt="Info Lookup" 
            className="w-10 h-10"
          />
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-terminal" />
            <h1 className="text-2xl font-bold tracking-tight text-terminal font-mono">
              INFO_LOOKUP
            </h1>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-1 container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 text-center">
            <p className="text-muted-foreground font-mono text-sm">
              {'>'} OSINT TOOLS // NUMBER & VEHICLE REGISTRATION LOOKUP
            </p>
          </div>

          <Tabs defaultValue="number" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="number" className="font-mono">
                NUMBER INFO
              </TabsTrigger>
              <TabsTrigger value="vehicle" className="font-mono">
                VEHICLE INFO
              </TabsTrigger>
            </TabsList>

            <TabsContent value="number">
              <NumberInfoPanel />
            </TabsContent>

            <TabsContent value="vehicle">
              <VehicleInfoPanel />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 backdrop-blur-sm bg-background/80 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} // Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
