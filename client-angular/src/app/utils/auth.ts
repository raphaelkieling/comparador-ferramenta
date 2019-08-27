const keyTokenName = 'comparador-valandro-token';

export function setToken(value: string) {
  localStorage.setItem(keyTokenName, value);
}

export function getToken(): string | null {
  return localStorage.getItem(keyTokenName) || null;
}

export function removeToken(): boolean {
  localStorage.removeItem(keyTokenName)

  return !!localStorage.getItem(keyTokenName);
}
