declare module 'react-tsparticles' {
  import { Component } from 'react';
  import type { Container, Engine } from 'tsparticles-engine';

  interface ParticlesProps {
    id?: string;
    init?: (engine: Engine) => Promise<void>;
    loaded?: (container: Container | undefined) => Promise<void>;
    options?: any;
    className?: string;
    style?: React.CSSProperties;
  }

  export default class Particles extends Component<ParticlesProps> {}
}

declare module 'tsparticles-slim' {
  import type { Engine } from 'tsparticles-engine';
  export function loadSlim(engine: Engine): Promise<void>;
}

declare module 'tsparticles-engine' {
  export interface Engine {
    addPreset(preset: string, options: any): void;
    load(id: string, options: any): Promise<Container | undefined>;
  }

  export interface Container {
    id: string;
    canvas: {
      element?: HTMLCanvasElement;
    };
    particles: {
      count: number;
    };
  }
}