declare function cliTruncate (input: string, columns: number, options?: cliTruncate.Options): string;

declare namespace cliTruncate {
  export interface Options {
    position: 'start' | 'middle' | 'end';
  }
}

export = cliTruncate;
