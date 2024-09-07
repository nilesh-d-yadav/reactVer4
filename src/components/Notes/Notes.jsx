import React from "react";

const Notes = () => {
  function alerted() {
    alert("Directing to a new page!");
    window.location.href = "/notes.html";
  }
  return (
    <>
      <div className="card bg-primary text-primary-content w-96 m-auto h-[48vh] ">
        <div className="card-body">
          <h2 className="card-title">React Notes</h2>
          <p>
            Create as many notes as you want and delete as per your
            requirements.
          </p>
          <div className="card-actions justify-end">
            <button className="btn">
              <a onClick={alerted} target="_blank">
                Notes
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
