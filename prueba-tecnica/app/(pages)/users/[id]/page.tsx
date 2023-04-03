"use client"
import { useSession } from "next-auth/react";
import useSWR, { Fetcher } from 'swr'
import api from "../../../../core/users";
import { useRouter } from "next/navigation";


interface UserDetailsProps {
    params: {
        id:string
    }
}

const UserDetails = ({params}:UserDetailsProps) => {
    const { data: session } = useSession()
    const fetcher: Fetcher<any, string> = ({token,id}:any) => api.getUserById(token,id)
    const { data } = useSWR(() => session ? {token:session.token, id:params.id} : null, fetcher)
    console.log(data);
    
    return (
        <section className="border-b border-white bg-black">
            <div className="mx-auto max-w-7xl px-8 lg:px-24 py-24 lg:py-36 border-x border-white">
                <div>
                    <h2 className="text-2xl font-semibold leading-tight text-white">Users</h2>
                </div>
                <div className="items-center grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-24">
                    <div className="mt-12 lg:mt-0 h-full py-12 w-full items-center">
                        <div className="space-y-2 w-full">
                            {/* Nombre */}
                            <div className="w-full mx-auto">
                                <label className="sr-only" htmlFor="name">Nombre</label>
                                <input className="text-black w-full appearance-none focus:border-accent-400 focus:outline-none 
                                        focus:ring-accent-400 ring-1 ring-white placeholder-white/50 bg-transparent px-3 py-3 
                                        sm:text-sm focus:bg-white border-transparent"
                                    placeholder="Nombre Completo" />
                            </div>
                            {/* Email */}
                            <div>
                                <label className="sr-only">E-Mail</label>
                                <input className="text-black w-full appearance-none focus:border-accent-400 focus:outline-none 
                                        focus:ring-accent-400 ring-1 ring-white placeholder-white/50 bg-transparent px-3 py-3 sm:text-sm focus:bg-white border-transparent"
                                    placeholder="jondoe@gmail.com"
                                    type="email" />
                            </div>
                            {/* Contraseña */}
                            <div>
                                <label className="sr-only">Contraseña</label>
                                <input className="text-black w-full appearance-none focus:border-accent-400 focus:outline-none 
                                        focus:ring-accent-400 ring-1 ring-white placeholder-white/50 bg-transparent px-3 py-3 sm:text-sm focus:bg-white border-transparent"
                                    type="password" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0 h-full py-12 w-full items-center">
                        <div className="space-y-2 w-full">
                            {/* Telefono1 */}
                            <div className="w-full mx-auto">
                                <label className="sr-only" htmlFor="name">Telefono 1</label>
                                <input className="text-black w-full appearance-none focus:border-accent-400 focus:outline-none 
                                        focus:ring-accent-400 ring-1 ring-white placeholder-white/50 bg-transparent px-3 py-3 
                                        sm:text-sm focus:bg-white border-transparent"
                                        placeholder="Telefono 1"
                                    type="tel" />
                            </div>
                            {/* Telefono2 */}
                            <div>
                                <label className="sr-only">Telefono 2</label>
                                <input className="text-black w-full appearance-none focus:border-accent-400 focus:outline-none 
                                        focus:ring-accent-400 ring-1 ring-white placeholder-white/50 bg-transparent px-3 py-3 sm:text-sm focus:bg-white border-transparent"
                                    placeholder="Telefono 2"
                                    type="tel" />
                            </div>
                            {/* Activo */}
                            <div className="flex flex-row gap-2 items-center justify-center">
                                <input type="checkbox" id="isActive" className="peer relative left-0 h-5 w-5 shrink-0 appearance-none rounded-sm 
                            border outline-none after:absolute after:left-0 after:top-0 after:h-full after:w-full  after:bg-[length:40px] 
                            after:bg-center after:bg-no-repeat after:content-[''] checked:bg-gray-500 hover:ring hover:ring-gray-300"></input>
                                <label htmlFor="isActive" className="inline-block w-full cursor-pointer font-medium text-gray-600 peer-checked:text-white"> Usuario Activo </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-full">
                    <button className="relative flex items-center px-4 border border-white py-4 text-white justify-center 
                                            hover:bg-zinc-800 bg-black hover:border-white/50 gap-3 w-full"
                        type="submit">Send</button>
                </div>
            </div>
        </section>
    );
}

export default UserDetails;