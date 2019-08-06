export function setToken(value: string) {
  localStorage.setItem('token', value);
}

export function getToken(): string {
  return localStorage.getItem('token') || '';
}
