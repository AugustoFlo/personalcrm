"use client"; // Necessário para usar hooks como useEffect

import { useEffect, useState } from "react";
import { api } from "@/services/api";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/teste")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Erro na requisição:", error));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Testando API</h1>
      <pre className="mt-4 p-3 bg-gray-100 rounded">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
