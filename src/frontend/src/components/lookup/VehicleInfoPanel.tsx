import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Car, Loader2 } from 'lucide-react';
import { useVehicleInfoQuery } from '@/hooks/useVehicleInfoQuery';
import { ResultViewer } from './ResultViewer';

export function VehicleInfoPanel() {
  const [registration, setRegistration] = useState('');
  const [searchRegistration, setSearchRegistration] = useState('');
  
  const { data, isLoading, error, refetch } = useVehicleInfoQuery(searchRegistration);

  const handleSearch = () => {
    if (registration.trim()) {
      setSearchRegistration(registration.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Input Section */}
      <Card className="border-terminal/30 bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="font-mono text-terminal flex items-center gap-2">
            <Car className="w-5 h-5" />
            VEHICLE LOOKUP
          </CardTitle>
          <CardDescription className="font-mono text-xs">
            Enter a vehicle registration number to retrieve information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="registration" className="font-mono text-sm">
              Registration Number
            </Label>
            <Input
              id="registration"
              type="text"
              placeholder="Enter registration..."
              value={registration}
              onChange={(e) => setRegistration(e.target.value)}
              onKeyPress={handleKeyPress}
              className="font-mono bg-background/50 border-terminal/30 focus:border-terminal"
              disabled={isLoading}
            />
          </div>
          <Button
            onClick={handleSearch}
            disabled={!registration.trim() || isLoading}
            className="w-full font-mono bg-terminal hover:bg-terminal/80 text-background"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                SEARCHING...
              </>
            ) : (
              <>
                <Car className="mr-2 h-4 w-4" />
                EXECUTE LOOKUP
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Results Section */}
      <Card className="border-terminal/30 bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="font-mono text-terminal">RESULTS</CardTitle>
          <CardDescription className="font-mono text-xs">
            {searchRegistration ? `Query: ${searchRegistration}` : 'No query executed'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResultViewer
            data={data}
            isLoading={isLoading}
            error={error}
            emptyMessage="Enter a registration and click 'EXECUTE LOOKUP' to begin"
          />
        </CardContent>
      </Card>
    </div>
  );
}
