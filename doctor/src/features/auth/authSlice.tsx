import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
export const initialState = {
  user: null,
  error: false,
  isLoading: false,
  loginErrors: null,
  SignupErrors: null,
  followers: null,
  following: null,
  notifications: null,
  loadingApp: false,
  errors: null,
  messagesNotification: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SignupErrors: (state, action) => {
      state.SignupErrors = action.payload;
    },
    LoginErrors: (state, action) => {
      state.loginErrors = action.payload;
    },
    SetIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    SetLoadingApp: (state, action) => {
      state.isLoading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.loginErrors = null;
      state.errors = null;
      state.followers = action.payload.user.followers;
      state.following = action.payload.user.following;
      state.notifications = action.payload.notifications;
    },

    clear_state: (state) => {
      state.user = null;
      state.followers = null;
      state.following = null;
      state.notifications = null;
    },
    errors: (state, action) => {
      state.error = true;
      state.errors = action.payload;
    },
    clearErrors: (state, action) => {
      state.error = false;
      state.errors = null;
    },
  },
});
export const {
  clearErrors,
  setUser,
  errors,
  clear_state,
  SetIsLoading,
  SetLoadingApp,
  SignupErrors,
  LoginErrors,
} = authSlice.actions;
export default authSlice.reducer;

//================================Action=======================================

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// ===== Signup User =====//
export function signup(formData: any, navigate: any) {
  return async (dispatch: any) => {
    dispatch(SetIsLoading(true));
    api
      .post("/signup", formData)
      .then((response) => {
        dispatch(SetIsLoading(false));
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.response.data);
        dispatch(SetIsLoading(false));
        dispatch(SignupErrors(err.response.data));
      });
  };
}
//===Doctor signup===//
export function doctorSignup(formData: any, navigate: any) {
  return async (dispatch: any) => {
    dispatch(SetIsLoading(true));
    api
      .post("/doctor-signup", formData)
      .then((response) => {
        dispatch(SetIsLoading(false));
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.response.data);
        dispatch(SetIsLoading(false));
        dispatch(SignupErrors(err.response.data));
      });
  };
}
//=====LOGIN======//

export function login(data: any, navigate: any) {
  return async (dispatch: any) => {
    dispatch(SetIsLoading(true));
    api
      .post("/login", data)
      .then((response) => {
        dispatch(SetIsLoading(false));
        dispatch(setUser(response.data));
        localStorage.setItem("token", response.data.token);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data);
        dispatch(SetIsLoading(false));
        dispatch(LoginErrors(err.response.data));
      });
  };
}

//=====LOGOUT=====//
export function logout() {
  return async (dispatch: any) => {
    dispatch(clear_state());
    localStorage.clear();
  };
}

//=====GET_USER====//
export function getUser() {
  const token = localStorage.getItem("token"); 
  return async (dispatch: any) => {
    dispatch(SetLoadingApp(true));
    api
      .get("/user", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        dispatch(setUser(response.data));
        dispatch(SetLoadingApp(false));
      })
      .catch((err) => {
        dispatch(SetLoadingApp(false));
        dispatch(clear_state());
      //  localStorage.clear();
      });
  };
}
