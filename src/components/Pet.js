const Pet = ({pet}) => {

    return (
        <div className="pets">
            <h4>{pet.name}</h4>
            <p>Type: {pet.type}</p>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>

        </div>
    )
}

export default Pet;