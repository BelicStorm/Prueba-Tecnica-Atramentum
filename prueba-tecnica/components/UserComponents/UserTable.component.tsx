


const UserTable = () => {
    return (
        <div className="container mx-auto px-4  max-w-11xl mx-auto px-8 py-2 justify-center 
                        bg-black h-screen">
            <div className="py-8 max-w-9xl mx-auto px-8 py-2">
                <div>
                    <h2 className="text-2xl font-semibold leading-tight text-white">Users</h2>
                </div>
                <div className="my-4 flex justify-between sm:flex-row flex-col border-white border mb-10">
                    <div className="relative">
                        <select className="appearance-none h-full  block appearance-none w-full 
                        bg-black text-white py-2 px-4 pr-8 leading-tight focus:outline-none 
                        hover:bg-white hover:text-black
                        focus:bg-white focus:text-black focus:border-white">
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <div className="relative">
                        <select className="appearance-none h-full  block appearance-none w-full 
                            bg-black text-white py-2 px-4 pr-8 leading-tight 
                            hover:bg-white hover:text-black
                            focus:bg-white focus:text-black focus:border-white">
                            <option>All</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>

                    <div className="block relative">
                        <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                <path
                                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                </path>
                            </svg>
                        </span>
                        <input placeholder="Search"
                            className="pl-8 pr-6 py-2 w-full appearance-none h-full  block appearance-none w-full 
                            bg-black text-white py-2 px-4 pr-8 leading-tight 
                            hover:bg-white hover:text-black
                            focus:bg-white focus:text-black focus:border-white" />
                    </div>
                </div>
                <div className=" px-4 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow overflow-hidden border border-white bg-black text-white">
                        <table className="min-w-full leading-normal">
                            <thead className="border-b border-white text-white">
                                <tr>
                                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                        User
                                    </th>
                                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                        Rol
                                    </th>
                                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                        Created at
                                    </th>
                                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-white hover:text-black border-b border-white bg-black text-white text-sm">
                                    <td className="px-5 py-5 ">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img className="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className=" whitespace-no-wrap">
                                                    Vera Carpenter
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5">
                                        <p className="whitespace-no-wrap">Admin</p>
                                    </td>
                                    <td className="px-5 py-5">
                                        <p className=" whitespace-no-wrap">
                                            Jan 21, 2020
                                        </p>
                                    </td>
                                    <td className="px-5 py-5">
                                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900">
                                            <span aria-hidden
                                                className="absolute inset-0 bg-green-200  rounded-full"></span>
                                            <span className="relative">Activo</span>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="px-5 py-5 bg-black border-t text-white flex flex-col xs:flex-row items-center xs:justify-between          ">
                            <span className="text-xs xs:text-sm">
                                Showing 1 to 4 of 50 Entries
                            </span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button className="text-sm bg-black hover:text-black hover:bg-white text-white font-semibold border border-white py-2 px-4">
                                    Prev
                                </button>
                                <button className="text-sm bg-black hover:text-black hover:bg-white text-white font-semibold border border-white py-2 px-4">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserTable;