/* eslint-disable no-unused-vars */
export enum LocalStorageKey {
  token = 'token',
}

export function loadStateToken(key: LocalStorageKey): string | undefined {
  try {
    const serializedState = localStorage.getItem(key);
    if (!serializedState) {
      return undefined;
    }
    const state: unknown = JSON.parse(serializedState);
    return state as string;
  } catch (e) {
    return undefined;
  }
}

export function saveStateToken(token: string | undefined, key: LocalStorageKey) {
  try {
    const serializedState = JSON.stringify(token);
    localStorage.setItem(key, serializedState);
  } catch (e) {
    console.log(e);
  }
}

export function removeStateToken(key: LocalStorageKey) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
}
