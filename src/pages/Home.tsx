import { supaClient } from "@client/supa-client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      let { data, error } = await supaClient.from("test").select();

      setData(data);
    })();
  }, []);

  const test = JSON.stringify(data);

  return <div>{test}</div>;
}
