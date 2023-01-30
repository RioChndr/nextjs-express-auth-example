export function fetchBackend(url: string, options: RequestInit) {
  return fetch(`http://localhost:3333${url}`, options)
}