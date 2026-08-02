import axiosInstance from "./axios";

export const ProfileService = {
  getProfile() {
    return axiosInstance.get("/profile");
  },
};