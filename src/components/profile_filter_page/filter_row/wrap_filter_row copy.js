import React, { Fragment, useContext, useEffect } from "react";
import "./wrap_filter_row.css";
import InnerFilterRow from "./inner_filter_row";
import Loading from "../../loading/loading";
import GalleryProfil from "../gallery_filter/gallery_profils";
import NoResult from "../no_result_component/no_result";
// CONTEXT
import DataContext from "../../../context/Data/dataContext";

const FilterRow = () => {
  const dataContext = useContext(DataContext);
  const { users, filterUsers, filterBy, usersFilterd } = dataContext;
  useEffect(() => {
    filterUsers();
  }, [filterBy]);

  return (
    <Fragment>
      <div>
        {!users ? (
          <Loading />
        ) : (
          <div>
            <div>
              <InnerFilterRow />
            </div>
            <div className='container m-0  pt-3  pl-3 pl-md-5'>
              <p className='result_search lead'>
                <i className='fas fa-search mr-1'> </i>
                {usersFilterd.length} Results found
              </p>
            </div>

            {usersFilterd.length > 0 && (
              <div>
                <GalleryProfil />
              </div>
            )}
            {usersFilterd.length === 0 && (
              <div>
                <NoResult />
              </div>
            )}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default FilterRow;
