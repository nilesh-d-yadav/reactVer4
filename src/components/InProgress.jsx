import React from "react";

const InProgress = () => {
  return (
    <>
      <div className="card glass w-96 min-h-95 min-w-4 align-middle flex-auto mt-auto">
        <figure>
          <img
            className="min-w-full"
            src="https://cdn.dribbble.com/userupload/15645094/file/original-4a789db6135cf44796e4611ef978d6f2.png?resize=752x564"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Under Development</h2>
          <p>Our Team is Working on this feature. It will be live soon</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InProgress;
