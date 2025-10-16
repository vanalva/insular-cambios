export const withBase = (path: string) => new URL(path.replace(/^\//, ''), import.meta.env.BASE_URL).toString();
