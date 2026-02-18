import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, AlertCircle, Database } from 'lucide-react';

interface ResultViewerProps {
  data: unknown;
  isLoading: boolean;
  error: Error | null;
  emptyMessage: string;
}

export function ResultViewer({ data, isLoading, error, emptyMessage }: ResultViewerProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center space-y-3">
          <Loader2 className="w-8 h-8 animate-spin text-terminal mx-auto" />
          <p className="text-sm text-muted-foreground font-mono">Processing query...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="border-destructive/50 bg-destructive/10">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription className="font-mono text-sm">
          ERROR: {error.message || 'Failed to fetch data. Please try again.'}
        </AlertDescription>
      </Alert>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center space-y-3">
          <Database className="w-8 h-8 text-muted-foreground mx-auto" />
          <p className="text-sm text-muted-foreground font-mono">{emptyMessage}</p>
        </div>
      </div>
    );
  }

  // Render data as formatted JSON
  return (
    <ScrollArea className="h-[400px] w-full rounded-md border border-terminal/30 bg-background/50 p-4">
      <pre className="font-mono text-xs text-terminal leading-relaxed">
        {JSON.stringify(data, null, 2)}
      </pre>
    </ScrollArea>
  );
}
