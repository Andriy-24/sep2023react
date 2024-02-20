const User = ({user, getCurrentUser}) => {
    const {id, name, username} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <button onClick={()=>getCurrentUser(user)}>Details</button>
        </div>
    );
};

export {User};