import Link from "next/link"
import { UserList, UserData } from "../../types/user.types"


// const UserTableFilter = () => {
//     return (
//         <div className="relative">
//             <select className="appearance-none h-full  block appearance-none w-full 
//             bg-black text-white py-2 px-4 pr-8 leading-tight focus:outline-none 
//             hover:bg-white hover:text-black
//             focus:bg-white focus:text-black focus:border-white">
//                 <option>5</option>
//                 <option>10</option>
//                 <option>20</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                 <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                     <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                 </svg>
//             </div>
//         </div>
//     )
// }
// const UserTableSearch = () => {
//     return (
//         <div className="block relative">
//             <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
//                 <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
//                     <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
//                     </path>
//                 </svg>
//             </span>
//             <input placeholder="Search"
//                 className="pl-8 pr-6 py-2 w-full appearance-none h-full  block appearance-none w-full 
//                             bg-black text-white py-2 px-4 pr-8 leading-tight 
//                             hover:bg-white hover:text-black
//                             focus:bg-white focus:text-black focus:border-white" />
//         </div>
//     )
// }

interface TableRowProps {
    tableContent: [UserData]
}
interface TableProps {
    data: UserList
}
const TableStructure: any = {
    contactName: "Nombre de contacto",
    email: "E-Mail",
    password: "Contraseña",
    phone1: "Telefono 1",
    phone2: "Telefono 2",
    activated: "Activado",
}
const MakeTableRows = ({ tableContent }: TableRowProps) => {
    return (
        <tbody>
            {
                tableContent.map((content: any) => {
                    const { id } = content
                    return (

                        <tr key={`tableRow-${id}`} className="hover:bg-white 
                            hover:text-black border-b border-white bg-black text-white text-[12px]
                            cursor-pointer">
                            {
                                Object.keys(TableStructure).map((element: any) => {
                                    return (

                                        <td key={`tableComponent-${id}-${element}`}  className="px-5 py-5 text-center">
                                            {
                                                element === "activated"
                                                    ? content[element]
                                                        ? <span className="relative inline-block px-3 py-1 font-semibold text-green-900">
                                                            <span aria-hidden className="absolute inset-0 bg-green-200  rounded-full"></span>
                                                            <span className="relative">True</span>
                                                        </span>
                                                        : <span className="relative inline-block px-3 py-1 font-semibold text-red-900">
                                                            <span aria-hidden className="absolute inset-0 bg-red-200  rounded-full"></span>
                                                            <span className="relative">False</span>
                                                        </span>
                                                    : <div className="flex items-center">
                                                        <div className="ml-3">
                                                            <p className=" whitespace-no-wrap">
                                                                {content[element]}
                                                            </p>
                                                        </div>
                                                    </div>
                                            }

                                        </td>
                                    )
                                })
                            }
                            <td className="px-5 py-5 text-center">
                                <Link href={`/users/${id}`}>Editar</Link>
                            </td>
                        </tr>

                    )
                })
            }
        </tbody>
    )
}
const MakeTableHead = () => {

    return (
        <thead className="border-b border-white text-white">
            <tr>
                {
                    Object.keys(TableStructure).map((element: any) => {
                        return (
                            <th key={`tableHead-${element}`} className="px-5 py-3 text-left text-xs font-semibold uppercase 
                            tracking-wider text-[12px] text-center">
                                {TableStructure[element]}
                            </th>
                        )
                    })
                }
            </tr>
        </thead>
    )
}

const UserTable = ({ data }: TableProps) => {
    const { content, totalElements, totalPages } = data
    // console.log(data);
    
    return (
        <section className="border-b border-white bg-black">
            <div className="mx-auto max-w-7xl px-8 lg:px-24 py-6 lg:py-12 border-x border-white">
                <div>
                    <h2 className="text-2xl font-semibold leading-tight text-white">Users</h2>
                </div>
                {/* La app carece de endpoints para filtrar */}
                {/* <div className="my-4 flex justify-between sm:flex-row flex-col border-white border mb-10">
                    <UserTableFilter />
                    <UserTableFilter />
                    <UserTableSearch />
                </div> */}
                <div className=" px-4 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow overflow-hidden border border-white bg-black text-white">
                        <table className="min-w-full leading-normal">
                            <MakeTableHead />
                            <MakeTableRows tableContent={content} />
                        </table>
                        <div className="px-5 py-5 bg-black border-t text-white flex flex-col xs:flex-row items-center xs:justify-between          ">
                            <span className="text-xs xs:text-sm">
                                {`Mostrando ${content.length} de ${totalElements} elementos`}
                            </span>
                            {
                                totalPages <= 1
                                    ? ""
                                    : <div className="inline-flex mt-2 xs:mt-0">
                                        <button className="text-sm bg-black hover:text-black hover:bg-white text-white font-semibold border border-white py-2 px-4">
                                            Prev
                                        </button>
                                        <button className="text-sm bg-black hover:text-black hover:bg-white text-white font-semibold border border-white py-2 px-4">
                                            Next
                                        </button>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // <div className="container mx-auto px-4  max-w-11xl mx-auto px-8 py-2 justify-center 
        //                 bg-black">
        //     <div className="py-8 max-w-9xl mx-auto px-8 py-2">
        //         <div>
        //             <h2 className="text-2xl font-semibold leading-tight text-white">Users</h2>
        //         </div>
        //         {/* La app carece de endpoints para filtrar */}
        //         {/* <div className="my-4 flex justify-between sm:flex-row flex-col border-white border mb-10">
        //             <UserTableFilter />
        //             <UserTableFilter />
        //             <UserTableSearch />
        //         </div> */}
        //         <div className=" px-4 py-4 overflow-x-auto">
        //             <div className="inline-block min-w-full shadow overflow-hidden border border-white bg-black text-white">
        //                 <table className="min-w-full leading-normal">
        //                     <MakeTableHead />
        //                     <MakeTableRows tableContent={content} />
        //                 </table>
        //                 <div className="px-5 py-5 bg-black border-t text-white flex flex-col xs:flex-row items-center xs:justify-between          ">
        //                     <span className="text-xs xs:text-sm">
        //                         {`Mostrando ${content.length} de ${totalElements} elementos`}
        //                     </span>
        //                     {
        //                         totalPages <= 1
        //                             ? ""
        //                             : <div className="inline-flex mt-2 xs:mt-0">
        //                                 <button className="text-sm bg-black hover:text-black hover:bg-white text-white font-semibold border border-white py-2 px-4">
        //                                     Prev
        //                                 </button>
        //                                 <button className="text-sm bg-black hover:text-black hover:bg-white text-white font-semibold border border-white py-2 px-4">
        //                                     Next
        //                                 </button>
        //                             </div>
        //                     }
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default UserTable;