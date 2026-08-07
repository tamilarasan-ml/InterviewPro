import { api, ENDPOINTS } from ".";

export const AuthService = {
  login(data: {
    email: string;
    password: string;
  }) {
    return api.post(ENDPOINTS.AUTH.LOGIN, data);
  },

  logout() {
    return api.post(ENDPOINTS.AUTH.LOGOUT);
  },

  getProfile() {
    return api.get(ENDPOINTS.AUTH.PROFILE);
  },
};