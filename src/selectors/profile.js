// The default value here will cause the ProfileInfo to re-render on every action (because of deep-equals)
// export const getProfileInfo = state => state.profil || { name: '', age: 0, bio: '', interests: [] };

// Two ways to fix it: 1) memoize, or 2) Do this instead:
const defaultProfile = { name: '', age: 0, bio: '', interests: [] };
export const getProfileInfo = state => state.profil || defaultProfile;