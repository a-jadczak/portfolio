export function formatWithComma(value: string, index: number, array: string[]): string {
  return index === array.length - 1 ? value : `${value}, `;
}
