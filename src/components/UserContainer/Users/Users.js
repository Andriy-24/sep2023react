import {useEffect, useState} from "react";
import {userService} from "../../../services/userService";
import {User} from "../User/User";
import {UserDetails} from "../UserDetails/UserDetails";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    const getCurrentUser = (user) => {
        setUserDetails(user);
    }
    return (
        <div>
            <div>
                {users.map(user => <User key={user.id} user={user} getCurrentUser={getCurrentUser}/>)}
                <hr/>
                {userDetails !== null && <UserDetails userDetails={userDetails}/>}
            </div>
        </div>
    );
};

export {Users};