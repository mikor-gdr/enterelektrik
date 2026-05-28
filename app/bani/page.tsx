"use client"
import React from 'react'
import Addbani from './tambah/addBani'
import { useState, useEffect } from "react";

const page = () => {
const [data, setData] = useState(null);

  useEffect(() => {
    // 2. Runs only on the browser after the component mounts
    fetch("http://localhost:3000/api/jkb")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
<>
<div>
        <br/>
      <center>
        <Addbani/>
        <b><h3>WEBSITE DALAM PERBAIKAN</h3></b>
      </center>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Nama</th>
        <th>Jumlah</th>
        <th>Keterangan</th>
      </tr>
    </thead>
    <tbody>

      <tr>
       
      </tr>
    
    </tbody>
  </table>
</div>
    </div>
</>
  )
}

export default page
