/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
      readonly REACT_APP_SERVICE_ID: string;
      readonly REACT_APP_TEMPLATE_ID: string;
      readonly REACT_APP_PUBLIC_KEY: string;
    }
  }