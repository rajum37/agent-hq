/// <reference types="vite/client" />

declare var pendo: any;

declare module "*.md?raw" {
  const content: string;
  export default content;
}

interface Window {
  pendo?: {
    trackAgent: (eventType: string, metadata: object) => void;
  };
}
