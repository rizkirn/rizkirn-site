/// <reference path="../.astro/types.d.ts" />

interface Runtime {
  env: {
    AI: Ai;
    AUTH_PASSWORD: string;
  };
}

declare namespace App {
  interface Locals {
    runtime: Runtime;
    isAuthenticated?: boolean;
  }
}
