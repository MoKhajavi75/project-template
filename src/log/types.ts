export type Logger = {
  profile: (id: string) => void;
  info: (message: string) => void;
  error: (message: string) => never;
};
