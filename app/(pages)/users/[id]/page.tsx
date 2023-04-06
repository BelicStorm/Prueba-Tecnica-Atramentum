"use client"
import { useSession } from "next-auth/react";
import useSWR, { Fetcher } from 'swr'
import useSWRMutation from 'swr/mutation'
import api from "../../../../core/users";
import { UserBasicInfo } from "../../../../types/user.types";
import ErrorBoundary from "../../../../components/ErrorHandlers/ErrorBoundary.component";
import { useContext, useRef, useState } from "react";
import { ToasterContext } from "../../layout";


interface UserDetailsProps {
    params: {
        id: string
    }
}

interface UserFormProps extends UserBasicInfo {
    onSave: Function,
    isMutating:boolean
}
const ValdiateForm = {
    userName: (data: any) => {
        return !(data.trim().length !== 0)
    },
    mail: (data: any) => {
        return !(data.trim().length !== 0 && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data))
    },
    pass: (data: any) => {
        return !(data.trim().length !== 0)
    },
    phone: (data: any) => {
        return !(data.trim().length !== 0 && data.trim().length === 9 && typeof parseInt(data) === "number")
    },
}
const UserForm = (props: UserFormProps) => {
    const NameRef = useRef<HTMLInputElement>(null);
    const EmailRef = useRef<HTMLInputElement>(null);
    const PassRef = useRef<HTMLInputElement>(null);
    const Phone1Ref = useRef<HTMLInputElement>(null);
    const Phone2Ref = useRef<HTMLInputElement>(null);
    const ActiveRef = useRef<HTMLInputElement>(null);
    const [errorState, setError] = useState({
        name: false, email: false, pass: false, phone1: false, phone2: false,
    })


    const onSubmit = async () => {
        setError({
            name: ValdiateForm["userName"](NameRef.current?.value),
            email: ValdiateForm["mail"](EmailRef.current?.value),
            pass: ValdiateForm["pass"](PassRef.current?.value),
            phone1: ValdiateForm["phone"](Phone1Ref.current?.value),
            phone2: ValdiateForm["phone"](Phone2Ref.current?.value),
        })

        if (!Object.values(errorState).includes(true)) {
            await props.onSave({
                phone1: Phone1Ref.current?.value,
                phone2: Phone2Ref.current?.value,
                activated: ActiveRef.current?.checked,
                email: EmailRef.current?.value,
                password: PassRef.current?.value,
                contactName: NameRef.current?.value,
            })
        }
    }
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
                                <input className={
                                    errorState.name
                                        ? `text-red-400 focus:text-black  w-full appearance-none focus:border-accent-400 focus:outline-none 
                                    focus:ring-accent-400 ring-1 ring-red-400 placeholder-white/50 bg-transparent px-3 py-3 
                                    sm:text-sm focus:bg-white border-transparent border-red-400`
                                        : `text-white focus:text-black  w-full appearance-none focus:border-accent-400 focus:outline-none 
                                    focus:ring-accent-400 ring-1 ring-white placeholder-white/50 bg-transparent px-3 py-3 
                                    sm:text-sm focus:bg-white border-transparent`
                                }
                                    defaultValue={props.contactName}
                                    ref={NameRef}
                                    placeholder="Nombre Completo" />
                                {errorState.name
                                    ? <label className="text-sm text-red-400" htmlFor="name">
                                        Error: El campo es requerido
                                    </label>
                                    : ""}
                            </div>
                            {/* Email */}
                            <div>
                                <label className="sr-only">E-Mail</label>
                                <input className={
                                    errorState.email
                                        ? `text-red-400 focus:text-black  w-full appearance-none focus:border-accent-400 focus:outline-none 
                                    focus:ring-accent-400 ring-1 ring-red-400 placeholder-white/50 bg-transparent px-3 py-3 
                                    sm:text-sm focus:bg-white border-transparent border-red-400`
                                        : `text-white focus:text-black  w-full appearance-none focus:border-accent-400 focus:outline-none 
                                    focus:ring-accent-400 ring-1 ring-white placeholder-white/50 bg-transparent px-3 py-3 
                                    sm:text-sm focus:bg-white border-transparent`
                                }
                                    placeholder="jondoe@gmail.com"
                                    defaultValue={props.email}
                                    ref={EmailRef}
                                    type="email" />
                                {errorState.email
                                    ? <label className="text-sm text-red-400" htmlFor="name">
                                        Error: El campo tiene que poseer la estructura de un Email
                                    </label>
                                    : ""}
                            </div>
                            {/* Contraseña */}
                            <div>
                                <label className="sr-only">Contraseña</label>
                                <input className={
                                    errorState.pass
                                        ? `text-red-400 focus:text-black  w-full appearance-none focus:border-accent-400 focus:outline-none 
                                    focus:ring-accent-400 ring-1 ring-red-400 placeholder-white/50 bg-transparent px-3 py-3 
                                    sm:text-sm focus:bg-white border-transparent border-red-400`
                                        : `text-white focus:text-black  w-full appearance-none focus:border-accent-400 focus:outline-none 
                                    focus:ring-accent-400 ring-1 ring-white placeholder-white/50 bg-transparent px-3 py-3 
                                    sm:text-sm focus:bg-white border-transparent`
                                }
                                    ref={PassRef}
                                    defaultValue={props.password}
                                    type="password" />
                                {errorState.pass
                                    ? <label className="text-sm text-red-400" htmlFor="name">
                                        Error: El campo es requerido
                                    </label>
                                    : ""}
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0 h-full py-12 w-full items-center">
                        <div className="space-y-2 w-full">
                            {/* Telefono1 */}
                            <div className="w-full mx-auto">
                                <label className="sr-only" htmlFor="name">Telefono 1</label>
                                <input className={
                                    errorState.phone1
                                        ? `text-red-400 focus:text-black  w-full appearance-none focus:border-accent-400 focus:outline-none 
                                    focus:ring-accent-400 ring-1 ring-red-400 placeholder-white/50 bg-transparent px-3 py-3 
                                    sm:text-sm focus:bg-white border-transparent border-red-400`
                                        : `text-white focus:text-black  w-full appearance-none focus:border-accent-400 focus:outline-none 
                                    focus:ring-accent-400 ring-1 ring-white placeholder-white/50 bg-transparent px-3 py-3 
                                    sm:text-sm focus:bg-white border-transparent`
                                }
                                    placeholder="Telefono 1"
                                    ref={Phone1Ref}
                                    defaultValue={props.phone1}
                                    type="tel" />
                                {errorState.phone1
                                    ? <label className="text-sm text-red-400" htmlFor="name">
                                        Error: El campo tiene que poseer 9 caracteres númericos
                                    </label>
                                    : ""}
                            </div>
                            {/* Telefono2 */}
                            <div>
                                <label className="sr-only">Telefono 2</label>
                                <input className={
                                    errorState.phone2
                                        ? `text-red-400 focus:text-black  w-full appearance-none focus:border-accent-400 focus:outline-none 
                                    focus:ring-accent-400 ring-1 ring-red-400 placeholder-white/50 bg-transparent px-3 py-3 
                                    sm:text-sm focus:bg-white border-transparent border-red-400`
                                        : `text-white focus:text-black  w-full appearance-none focus:border-accent-400 focus:outline-none 
                                    focus:ring-accent-400 ring-1 ring-white placeholder-white/50 bg-transparent px-3 py-3 
                                    sm:text-sm focus:bg-white border-transparent`
                                }
                                    placeholder="Telefono 2"
                                    ref={Phone2Ref}
                                    defaultValue={props.phone2}
                                    type="tel" />
                                {errorState.phone2
                                    ? <label className="text-sm text-red-400" htmlFor="name">
                                        Error: El campo tiene que poseer 9 caracteres númericos
                                    </label>
                                    : ""}
                            </div>
                            {/* Activo */}
                            <div className="flex flex-row gap-2 items-center justify-center">
                                <input type="checkbox" id="isActive" className="peer relative left-0 h-5 w-5 shrink-0 appearance-none rounded-sm 
                            border outline-none after:absolute after:left-0 after:top-0 after:h-full after:w-full  after:bg-[length:40px] 
                            after:bg-center after:bg-no-repeat after:content-[''] checked:bg-gray-500 hover:ring hover:ring-gray-300"
                                    defaultChecked={props.activated}
                                    ref={ActiveRef}></input>
                                <label htmlFor="isActive" className="inline-block w-full cursor-pointer font-medium text-gray-600 peer-checked:text-white"> Usuario Activo </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-full">
                    <button className="relative flex items-center px-4 border border-white py-4 text-white justify-center 
                                            hover:bg-zinc-800 bg-black hover:border-white/50 gap-3 w-full disabled:cursor-not-allowed"
                        onClick={async () => await onSubmit()}
                        disabled={props.isMutating}
                        type="button">
                        Send
                    </button>
                </div>
            </div>
        </section>
    )
}


const UserDetails = ({ params }: UserDetailsProps) => {
    const { data: session } = useSession()
    const fetcher: Fetcher<any, string> = (data: any) => api.getUserById(data.token, data.id)
    const { data } = useSWR(() => session ? { token: session.token, id: params.id } : null, fetcher)

    const mutateFetcher: Fetcher = (data: any) => api.putUserById(data.token, data.id, data.updateParams)
    const { trigger, isMutating } = useSWRMutation("a", (url: any, { arg }: { arg: any }) => mutateFetcher(arg))

    const Toaster = useContext(ToasterContext)

    const onSave = async (updateParams: any) => {
        if (session) {
            try {
                await trigger({
                    token: session.token, id: params.id, updateParams: { ...updateParams, originPage: data.originPage }
                })
                Toaster.current.addMessage({ mode:"success", message: "Usuario Actualizado con exito" })
            } catch (e) {
                // console.log(e)
                Toaster.current.addMessage({ mode:"error", message: `Error: ${e}` })
            }


        }


    }
    return (
        <ErrorBoundary>
            <UserForm {...data} onSave={onSave} isMutating={isMutating} />
        </ErrorBoundary>
    );
}

export default UserDetails;