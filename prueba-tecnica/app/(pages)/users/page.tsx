"use client"
import { useSession } from "next-auth/react";
import useSWR, { Fetcher } from 'swr'
import React, { use } from "react";
import api from "../../../core/users";


const UsersPage = () => {
    return (
        <div>UsersPage</div>
    );
};

export default UsersPage;