import React from "react";
const Chatbot = () => {
  function alerted() {
    alert("Directing to a new page!");
    window.location.href = "/index.html";
  }
  return (
    <>
      <div className="card bg-primary text-primary-content w-96 m-auto h-[48vh] ">
        <div className="card-body">
          <h2 className="card-title">AI Bot</h2>
          <p>Powered by Google's GEMINI AI</p>
          <div className="card-actions justify-end">
            <button className="btn">
              <a onClick={alerted} target="_blank">
                Chat Bot
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
