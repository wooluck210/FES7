import React, { useState } from 'react';

function MainPet() {

    const [pets, setPets] = useState([
        { name: "벨라", species: "고양이", age: "5", id: 111 },
        { name: "루시", species: "강아지", age: "3", id: 112 },
        { name: "데이지", species: "토끼", age: "2", id: 113 },
        { name: "몰리", species: "고양이", age: "1", id: 114 },
        { name: "매기", species: "강아지", age: "6", id: 115 }
    ]);

    return (
        <>
            <AddPetForm />
            <ul>
                {pets.map(() => {

                })}
            </ul>
        </>
    )
}

function AddPetForm() {
    return (
        <div>AddPetForm</div>
    )
}


function PetItem() {
    return (
        <div>PetItem</div>
    )
}

export default function Pet() {
    return (
        <div>
            <h1>애완동물 정보 리스트</h1>
            <MainPet />
        </div>
    )
}