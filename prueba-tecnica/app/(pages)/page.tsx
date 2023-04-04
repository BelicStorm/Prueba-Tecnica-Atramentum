"use client"
import { useSession } from "next-auth/react";
import useSWR, { Fetcher } from 'swr'
import React, { Suspense } from "react";
import api from "../../core/users";
import HomeInfo from "../../components/HomeComponents/StaticHomeInfo.component";
import UserTable from "../../components/UserComponents/UserTable.component";
import ErrorBoundary from "../../components/ErrorHandlers/ErrorBoundary.component";

const HomePage = () => {
    const { data: session } = useSession()
    const fetcher: Fetcher<any, string> = (token) => api.getAllUsers(token)
    const { data } = useSWR(() => session ? session.token : null, fetcher)
    // console.log(data);

    return (
        <React.Fragment>
            <ErrorBoundary>
                {
                    data
                        ? <Suspense fallback={<span>Loading</span>}>
                            <UserTable data={data} />
                        </Suspense>
                        : <HomeInfo />
                }
            </ErrorBoundary>
        </React.Fragment>
    );
};

export default HomePage;