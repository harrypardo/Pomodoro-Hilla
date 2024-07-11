declare module '*.css?inline' {
  import type { CSSResultGroup } from 'lit';
  const content: CSSResultGroup;
  export default content;
}

// Allow any CSS Custom Properties
declare module 'csstype' {
  interface Properties {
    [index: `--${string}`]: any;
  }
}


declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.gif";

declare module "*.mp4";