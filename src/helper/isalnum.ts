export function isalnum(str: string) {
  return /^[A-Za-z0-9]*$/.test(str);
}

export function isalpha(str: string) {
  return /^[A-Za-z]*$/.test(str);
}

export function isdigit(str: string) {
  return /^[0-9]*$/.test(str);
}
