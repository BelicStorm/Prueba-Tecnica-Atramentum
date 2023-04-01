"use client"
import { useSession } from "next-auth/react";
import useSWR, { Fetcher } from 'swr'
import React, { use } from "react";
import api from "../../../core/users";


const UsersPage = () => {
    const { data: session } = useSession()
    const fetcher: Fetcher<any, string> = (token) => api.getAllUsers(token)
    const { data } = useSWR(() => session ? session.token : null, fetcher)
    console.log(data, "aaa");


    return (
        <div>UsersPage</div>
    );
};

export default UsersPage;