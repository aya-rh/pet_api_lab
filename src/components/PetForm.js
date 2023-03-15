import { useState } from "react";

const PetForm = (pets, onSubmit) => {
    const [newPet, setNewPet] = useState({
        name: "", 
        type: "", 
        breed: "", 
        age: 0
    })

}

export default PetForm;