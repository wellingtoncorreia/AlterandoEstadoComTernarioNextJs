"use client"

import React, { useState } from 'react';

export default function MudaItem() {
    const [editando, setEditando] = useState(false);
    const [nome, setNome] = useState("Estudar React");

    const salvar = () => {
        setEditando(false);
    };

    return (
        <div className="p-6 max-w-md mx-auto border rounded shadow mt-4 space-y-4">
            <h1 className="text-xl font-bold">Tarefa</h1>

            {editando ? (
                <div>
                    {/* onChange={(e) => setNome(e.target.value)}Esse comando serve para que toda vez que muda o texto do input ele altera o valor que está na cosntante*/}
                    <input value={nome} onChange={(e) => setNome(e.target.value)} className="border px-2 py-1 rounded w-full mb-2"/>
                    <div className="flex gap-2">
                        <button onClick={salvar} className="bg-green-500 text-white px-3 py-1 rounded">Salvar</button>
                    </div>
                </div>
            ) : (
                <div>
                    <h2 className="font-semibold">{nome}</h2>
                    <button onClick={() => setEditando(true)} className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded">Editar</button>
                </div>
            )}

        </div>
    );
}