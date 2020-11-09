import axios from "../config/axios";
import Swal from "sweetalert2";

export const Investment = (investment) => {
  return { type: "ADD_INVESTMENT", payload: investment };
};

export const startGetInvestment = () => {
  console.log(localStorage.getItem("authToken"));
  return (dispatch) => {
    axios
      .get("/client/investment", {
        headers: {
          auth: localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const investment = response.data;
        dispatch(Investment(investment));
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
export const startGetAddInvestment = (data) => {
  console.log(data);
  return (dispatch) => {
    axios
      .post("/client/investment", data, {
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
                  "Investment Done successfully.",
                  "success"
                );
                const investment = response.data;
                dispatch(Investment(investment));
              } else {
                Swal.fire(
                  "Cancelled",
                  "Investment Cancelled.",
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
          text: "You are not logged in. Please log in to do investment.",
        });
      });
  };
};

export const RemoveInvestment= (_id) => {
  return { type: "REMOVE_INVESTMENT", payload: _id };
};
export const startRemoveInvestment = (id) => {
  return (dispatch) => {
    axios
      .delete(`/client/invetsment/${id}`, {
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
                "Investment Had Not Been Remove.",
                "error"
              );
            } else {
              const investment = response.data;
              dispatch(RemoveInvestment(investment._id));
              Swal.fire(
                "Removed!",
                "investment Has Been Remove.",
                "success"
              );
            }
          });
        }
      });
  };
};
