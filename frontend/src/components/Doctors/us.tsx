import React from "react";
import { UserTypeAdminPanel } from "../../models";

const User: React.FC<UserTypeAdminPanel> = ({ id, username, email, status }) => {
    return (
        <tr key={id}>
            <td>{username}</td>
            <td>{email}</td>
            <td>{status}</td>
        </tr>
    );
};

export default User;
