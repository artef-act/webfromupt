import React from 'react';
import IdentityCard from '../../components/Identity';

export default function Pendaftar() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    return (
        <IdentityCard data={user}/>
    );
}