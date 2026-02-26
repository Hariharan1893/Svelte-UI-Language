// Using $state in a standard TS file allows it to be imported anywhere
// and remain reactive across the entire application.
export const userStats = $state({
  age: 22,
  loginCount: 0
});

// You can also export functions to modify this state
export function incrementAge() {
  userStats.age += 1;
}