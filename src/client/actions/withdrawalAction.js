import axios from "../config/axios";
import Swal from "sweetalert2";

export const Withdrawal = (withdrawal) => {
  return { type: "ADD_WITHDRAWAL", payload: withdrawal};
};

export const startGetWithdrawal = () => {
  console.log(localStorage.getItem("authToken"));
  return (dispatch) => {
    axios
      .get("/client/withdrawal", {
        headers: {
          auth: localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const withdrawal = response.data;
        dispatch(Withdrawal(withdrawal));
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
export const startGetAddWithdrawal = (data) => {
  console.log(data);
  return (dispatch) => {
    axios
      .post("/client/withdrawal", data, {
        headers: {
          auth: localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        console.log("data", response.data);
        if (response.data.hasOwnProperty("errors")) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.data.errors,
          });
        } else {
          if (response) {
            console.log(response);
            Swal.fire({
              title: "Are you sure?",
              icon: "success",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "ADD!",
            }).then((result) => {
              console.log(result);
              if (result.isConfirmed) {
                Swal.fire(
                  "Added!",
                  "Withdrawal done successfully.",
                  "success"
                );
                const withdrawal = response.data;
                dispatch(Withdrawal(withdrawal));
              } else {
                Swal.fire(
                  "Cancelled",
                  "Withdrawal Cancelled.",
                  "error"
                );
              }
            });
          }
        }
      })

      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You are not logged in. Please log in withdrawal.",
        });
      });
  };
};

export const RemoveWithdrawal = (_id) => {
  return { type: "REMOVE_WITHDRAWAL", payload: _id };
};
export const startRemoveWithdrawal = (id) => {
  return (dispatch) => {
    axios
      .delete(`/client/withdrawal/${id}`, {
        headers: {
          auth: localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        if (response.data.hasOwnProperty("errors")) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.data.errors,
          });
        } else {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!",
          }).then((result) => {
            if (!result.isConfirmed) {
              Swal.fire(
                "Cancelled",
               
                "error"
              );
            } else {
              const withdrawal = response.data;
              dispatch(RemoveWithdrawal(withdrawal._id));
              Swal.fire(
                "Removed!",
                
                "success"
              );
            }
          });
        }
      });
  };
};
