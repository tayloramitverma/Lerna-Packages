import { isOdd } from "demo-is-odd";

export function isEven(n: number): boolean {
  return !isOdd(n);
}
