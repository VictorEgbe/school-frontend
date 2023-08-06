import { useState } from "react";
import "./AddClass.scss";
import { CircularProgress } from "@mui/material";

const AddClass = ({ setOpen, mutation }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ name });
  };

  return (
    <div className="addClass">
      <div className="wrapper">
        <h1>Add a new class</h1>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="name">Name of Class</label>
            <input
              id="name"
              type="text"
              placeholder="e.g Form 3"
              required
              disabled={mutation.isLoading}
              className={mutation.isError && "errorStyle"}
              onChange={(e) => setName(e.target.value)}
            />
            {mutation.isError && (
              <span>{mutation?.error?.response?.data?.error}</span>
            )}
          </div>

          <div className="formBtn">
            <button
              onClick={() => setOpen(false)}
              type="button"
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? (
                <CircularProgress size={16} color="inherit" />
              ) : (
                "Cancel"
              )}
            </button>
            <button type="submit" disabled={mutation.isLoading}>
              {mutation.isLoading ? (
                <CircularProgress size={16} color="inherit" />
              ) : (
                "Create"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
