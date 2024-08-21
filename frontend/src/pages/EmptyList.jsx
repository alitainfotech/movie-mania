import React from "react";

function EmptyList() {
  return (
    <main className="h-[90vh] flex flex-col justify-center items-center bg-img">
      <div className="flex gap-5 flex-col empty-sec">
        <h2>Your movie list is empty</h2>
        <div className="text-center">
          <button type="button" className="py-2 px-3 rounded-md btn-primary">
            Add a new movie
          </button>
        </div>
      </div>
    </main>
  );
}

export default EmptyList;
