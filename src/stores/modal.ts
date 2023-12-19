import { writable } from 'svelte/store';

export const modal = writable({
    users: ["John", "Jane", "Alice", "Bob"],
    open: false,

  }
);