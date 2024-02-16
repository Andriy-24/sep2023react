const Simpson = ({simpson}) => {
    const { name, image } = simpson;
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Simpson};