"use client"
import { useSession } from "next-auth/react";
import useSWR, { Fetcher } from 'swr'
import React from "react";
import api from "../../core/users";
import HomeInfo from "../../components/HomeComponents/StaticHomeInfo.component";
import UserTable from "../../components/UserComponents/UserTable.component";

const HomePage = () => {
    const { data: session } = useSession()
    const fetcher: Fetcher<any, string> = (token) => api.getAllUsers(token)
    const { data } = useSWR(() => session ? session.token : null, fetcher)

    return (
        <React.Fragment>
            {
                data
                    ? <UserTable data={data} />
                    : <HomeInfo />
            }
        </React.Fragment>
    );
};

export default HomePage;