import React from "react";

function Alert({alertSwitch = ()=>{}}) {
  return (
    <div className="alert alert-danger alert-dismissible" role="alert">
      <strong>Oops!</strong> Algo hicimos mal, por favor vuelve a intentarlo!.
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={alertSwitch}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>  
  );
}

export default Alert;
