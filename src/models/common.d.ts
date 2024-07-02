export type EnumRelative<T extends number | string | symbol, V> = {
  [key in T]: V;
};

export interface EnvironmentDetial {
  BASE_API_URL: string;
}
