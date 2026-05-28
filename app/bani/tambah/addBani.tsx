"use client"
import { useState,SyntheticEvent } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Swal from "sweetalert2"

const Addbani = () => {
    const [values,setValues] = useState({
        nama:'',
        alamat:'',
        hp:'',
    })

    const [isopen,setOpen] = useState(false);
    const [isClose,setClose] = useState(true);
    const [isloading,setLoading] = useState(false)

    const router = useRouter();
    const handleSubmit = async (e:SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post("/api/jkb", values).then( res => {
                Swal.fire({
                    icon:"success",
                    title:"SUCCES",
                    text:res.data.msg
                    
                })
            });
            setLoading(false);
            router.push('/bani')
            router.refresh();
            setOpen(false);
        }catch(err) {
            console.log(err)
        }

    };
    const handleModal = () => {
        setOpen(!isopen);
    };
    const tutupmodal = () => {
        setOpen(!isopen);
    };

    return (
        <div>
            <button className="btn btn-primary btn-sm tet-white" onClick={handleModal}>tambah data</button>
            <div className={isopen ? "modal modal-open" : "modal"}>
            <div className="modal-box">
                
                    <button className="btn ml-110" onClick={tutupmodal}>X</button>
                <h3 className="font-bold text-lg">tambah data </h3>
                <br/>
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full">
                        <label className="label font-bold">nama</label>
                        <input type="text" className="input input-bordered" onChange={e => setValues({...values, nama: e.target.value})} value={values.nama} required/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">alamat</label>
                        <input type="text" className="input input-bordered" onChange={e => setValues({...values, alamat: e.target.value})} value={values.alamat} required/>
                    </div>
                    {/* <textarea placeholder="Primary" className="textarea textarea-primary"></textarea> */}
                    <button type="submit" className="btn btn-success">OKE</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Addbani;