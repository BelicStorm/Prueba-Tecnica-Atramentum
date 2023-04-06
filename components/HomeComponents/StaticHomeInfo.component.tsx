"use client"
import React from "react";

const HomeInfo = () => {
    return (
        <React.Fragment>
            <section className="border-b border-white bg-black">
                <div className="mx-auto max-w-7xl px-8 lg:px-24 py-12 border-x bg-white border-black">
                    <div className="relative flex justify-start">
                        <span className="bg-white pr-3 text-4xl lg:text-9xl font-black tracking-tight text-black font-display"
                        ><span className="font-thin text-accent-400">✺</span> Descripción de la prueba técnica
                        </span>
                    </div>
                </div>
            </section>
            <section className="border-b border-white bg-black">
                <div className="mx-auto max-w-7xl px-8 lg:px-24 py-12 border-x border-white">
                    <div className="space-y-12 lg:border-zinc-100 max-w-2xl">
                        <div className="pb-16 top-0">
                            <div className="space-y-3 ml-auto">
                                <p className="text-2xl font-semibold lg:text-3xl text-white font-display">
                                    Crear una aplicación básica en React que muestre, como mínimo, dos pantallas relacionadas con el endpoint de Clientes:
                                </p>
                            </div>

                            <div className="space-y-24 mt-12">
                                <div className="text-base space-y-6">
                                    <p className="text-white text-lg">
                                        1. Listado de clientes: Muestra el listado de clientes de la forma que consideres más conveniente, teniendo en cuenta que no conoces la lógica de negocio y lo que podría ser más importante para cada uno de los ámbitos de la empresa.
                                    </p>
                                    <p className="text-white text-lg">
                                        2. Edición de clientes: Al hacer clic en un cliente del listado, accede a una página de edición del cliente. Un cliente tiene muchas relaciones (direcciones de facturación, de envío, cuentas bancarias, etc.) y aunque no es necesario cubrirlas todas, sí será necesario mínimo mostrar dos o tres para mostrar cómo gestionar diversas llamada (diversas pestañas, vía scroll con carga progresiva o de la forma que te sientas más cómodo). Recuerda que estos cambios deberán poder guardarse con la respectiva llamada a la API.
                                    </p>

                                    <p className="text-sm">
                                        <span className="flex flex-wrap gap-3">
                                            <a href="https://github.com/BelicStorm" target="blank" className="text-white 500 hover:text-white">Github</a>
                                            <a href="https://github.com/BelicStorm" className="text-white 500 hover:text-white">Figma</a>
                                            <a href="https://www.linkedin.com/in/cristian-pardo-casanova-a60251138/" className="text-white 500 hover:text-white">Linkedin</a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default HomeInfo;