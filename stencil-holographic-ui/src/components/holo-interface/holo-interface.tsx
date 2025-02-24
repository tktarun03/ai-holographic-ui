import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'holo-interface',
  styleUrl: 'holo-interface.css',
  shadow: true
})
export class HoloInterface {
  @State() status: string = "System Idle - Ready for Projection";

  activateHologram() {
    this.status = "Activating Holographic Interface... 🌟";
    setTimeout(() => {
      this.status = "Holographic Projection Active 🛰️";
    }, 3000);
  }

  render() {
    return (
      <div class="holo-box">
        <h2>AI Holographic Interface</h2>
        <button onClick={() => this.activateHologram()}>{this.status === "System Idle - Ready for Projection" ? 'Activate' : 'Processing...'}</button>
        <p>{this.status}</p>
      </div>
    );
  }
}
