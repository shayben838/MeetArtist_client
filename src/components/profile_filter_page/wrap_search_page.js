import React, { useContext, useEffect } from "react";
import Loading from "../loading/loading";
import FilterRow from "./filter_row/wrap_filter_row";
import DataContext from "../../context/Data/dataContext";

const WrapSearchPage = () => {
  // NEW CONTEXT
  const dataContext = useContext(DataContext);
  useEffect(() => {
    dataContext.loadData();
    // eslint-disable-next-line
  }, []);
  const users = dataContext.users;
  return (
    <div>
      {!users ? (
        <Loading />
      ) : (
        <div style={{ marginTop: "3.5rem", minHeight: "calc(100vh - 207px)" }}>
          <FilterRow />
        </div>
      )}
    </div>
  );
};
export default WrapSearchPage;
