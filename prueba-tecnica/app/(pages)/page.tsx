"use client"
import { useSession } from "next-auth/react";
import useSWR, { Fetcher } from 'swr'
import React, { use } from "react";
import api from "../../core/users";
import HomeInfo from "../../components/HomeComponents/StaticHomeInfo.component";
import UserTable from "../../components/UserComponents/UserTable.component";

const HomePage = () => {
    const { data: session } = useSession()
    const fetcher: Fetcher<any, string> = (token) => api.getAllUsers(token)
    const { data } = useSWR(() => session ? session.token : null, fetcher)
    console.log(data, "test data");

    return (
        <React.Fragment>
{
    data
    ? <UserTable/>
    : <HomeInfo/>
}
        </React.Fragment>
    );
};

export default HomePage;