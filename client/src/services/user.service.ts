import { api, ENDPOINTS } from ".";

export const UserService = {
  getProfile() {
    return api.get(ENDPOINTS.USER.PROFILE);
  },

  updateProfile(data: unknown) {
    return api.put(
      ENDPOINTS.USER.UPDATE,
      data
    );
  },
};