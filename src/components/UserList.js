import React from "react";
function User({user}){
    return(
        <div>
            {user.username} <span>({user.email})</span>
        </div>
    )
}
function UserList(){
    const users = [
        {id:1,
        username: "green",
        email: "green@naver.com"
        },
        {id:2,
        username: "blue",
        email: "blue@navar.com"
        },
        {id:3,
        username: "yellow",
        email: "yellow@navar.com"
        }
    ]
    return(
        <div>
            {users.map(user=>(
                <User key={user.id} user={user} />
            ))}
            {/* <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} /> */}
        </div>
    )
}
export default UserList;