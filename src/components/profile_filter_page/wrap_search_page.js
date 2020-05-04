import React, { useEffect, useState,useParams } from "react";
import Loading from "../loading/loading";
import { getAllArtist } from "../../back_end/api/api_action";
import FilterRow from "./filter_row/wrap_filter_row";


function useFetch() {
    const [users, setUsers] = useState("");
    const importUsers = async () => {
        const users = await getAllArtist();
         setUsers(users);}
    useEffect(() => { importUsers() }, [])
    return users
}


function WrapSearchPage({dataAPI}) {
    const users = useFetch();
    return (
        <div >
            {!users ? <Loading /> :

                <div style={{ marginTop: "3.5rem", minHeight: "calc(100vh - 207px)" }}>
                    <FilterRow dataAPI={dataAPI} />
                </div>
            }
        </div>

    )
}
export default WrapSearchPage;