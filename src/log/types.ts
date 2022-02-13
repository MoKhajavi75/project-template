export type Logger = {
  profile: (id: string) => void;
  info: (message: unknown) => void;
  error: (message: string) => never;
};
