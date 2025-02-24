import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI-Powered Holographic UI Dashboard</h1>
    <div class="dashboard">
      <holo-interface></holo-interface>
      <wasm-ai-holo></wasm-ai-holo>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }