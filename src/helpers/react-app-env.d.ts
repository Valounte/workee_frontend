/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

/* eslint-disable */

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
    readonly GOOGLE_MAP_API_KEY: string;
    readonly GOOGLE_RECAPTCHA_API_KEY: string;
    readonly API_TOKEN: string;
    readonly API_BASE_URL: string;
    readonly V1_BASE_URL: string;
    readonly WIKI_BASE_URL: string;
    readonly WORDPRESS_API_BASE_URL: string;
    readonly SITE_URL: string;
    readonly KEEP_DATA_TEST_ID?: string;
    readonly API_IA_BASE_URL: string;
    readonly BASE_URL: string;
  }
}

declare module '*.avif' {
  const src: string;
  export default src;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
