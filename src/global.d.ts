declare namespace NodeJS {
  export const setTimeout = (fn: (...args: any[]) => any, delay, ...args: any[]) => number
}