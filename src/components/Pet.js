const Pet = ({pet, onDelete}) => {

    const handleDeleteClick = () => {
        onDelete(pet.id);
    }

    return (
        <div className="pets">
            <h4>{pet.name}</h4>
            <p>Type: {pet.type}</p>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}

export default Pet;