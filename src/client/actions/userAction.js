//import axios from "axios";
import axios from "../config/axios";
import Swal from "sweetalert2";

export const setTotolUser = (user) => {
  return { type: "SET_TOTOL_USER", payload: user };
};
export const setUser = (user) => {
    return { type: "SET_USER", payload: user };
  };
  export const startGetUser = () => {
    return (dispatch) => {
      axios
        .get("/client/account", {
          headers: {
            auth: localStorage.getItem("authToken"),
          },
        })
        .then((response) => {
          const user = response.data;
          console.log(user);
          dispatch(setUser(user));
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: { err: "invalid Info" },
          });
        });
    };
  };
export const startGetTotolUser = () => {
  return (dispatch) => {
    axios
      .get("/client/list", {
        headers: {
          auth: localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const user = response.data;
        console.log(user);
        dispatch(setTotolUser(user));
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: { err: "invalid Info" },
        });
      });
  };
};
export const startRegisterUser = (formData, redirect) => {
  console.log(formData)
  return (dispatch) => {
    axios
      .post("/client/register", formData)
      .then((response) => {
        if (response.data.hasOwnProperty("errors")) {
          console.log(response.data)
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.data.errors.message,
          });
        } else {
          Swal.fire({
            title: "Are you sure?",

            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Register ",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(" Registration Done Successfully");
              redirect();
            } else {
              Swal.fire("Cancelled");
            }
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: { err },
        });
      });
  };
};
export const startLoginUser = (formData, redirect) => {
  return (dispatch) => {
    console.log(formData)
    axios.post("/client/login", formData).then((response) => {
      if (response.data.hasOwnProperty("errors")) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response.data.errors.message,
        });
      } else {
        Swal.fire({
          title: "Are you sure?",

          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Login!",
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.setItem("authToken", response.data.token);
            axios
              .get("/client/account", {
                headers: {
                  auth: localStorage.getItem("authToken"),
                },
              })
              .then((response) => {
                const user = response.data;
                console.log(user)
                dispatch(setUser(user));
              })
              .catch((err) => {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: err,
                });
              });

            Swal.fire("You Successfully Login!");
            redirect();
          } else {
            Swal.fire("Cancelled");
          }
        });
      }
    });
  };
};
export const changePassword= (data, _id) => {
  return { type: "CHANGE_PASSWORD", payload: { data, _id } };
};

export const startChangePassword = (_id, formData) => {
  return (dispatch) => {
    console.log(`${_id}`);
    console.log(formData)
    axios
    .put(`/client/password/${_id}`, formData,{
      headers: {
        auth: localStorage.getItem("authToken")
      }})
      .then((response) => {
        console.log(response)
        const data = response.data;
        console.log(data);
        console.log(_id);
        console.log(data._id);
        dispatch(changePassword(data, _id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const startLogoutUser = () => {
  return (dispatch) => {
    axios
      .delete("/client/logout", {
        headers: {
          auth: localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        if (response.data.notice) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Logout!",
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.removeItem("authToken");
              dispatch(setUser({}));

              Swal.fire("Logout!", "You succesfully logout.");
              window.location.href = "/";
            }
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
      });
  };
};
