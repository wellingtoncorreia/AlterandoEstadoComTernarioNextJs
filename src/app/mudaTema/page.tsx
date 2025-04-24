'use client'
import React, { useEffect, useState } from 'react';

export default function MudaTema() {
  const [tema, setTema] = useState('claro');

  useEffect(() => {
    document.body.className = tema === 'escuro' ? 'bg-gray-900 text-white' : 'bg-white text-black';
  }, [tema]);

  return (
    <div className="p-6">
      <p>Tema atual: {tema}</p>
      <button onClick={() => setTema(tema === 'claro' ? 'escuro' : 'claro')} className="bg-purple-500 text-white px-3 py-1 rounded">
        Alternar Tema
      </button>
    </div>
  );
}
