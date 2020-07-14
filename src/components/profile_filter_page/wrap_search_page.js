import React from "react";
import Loading from "../loading/loading";
import FilterRow from "./filter_row/wrap_filter_row";

function WrapSearchPage({ dataAPI }) {
  const users = dataAPI.users;
  return (
    <div>
      {!users ? (
        <Loading />
      ) : (
        <div style={{ marginTop: "3.5rem", minHeight: "calc(100vh - 207px)" }}>
          <FilterRow dataAPI={dataAPI} />
        </div>
      )}
    </div>
  );
}
export default WrapSearchPage;
