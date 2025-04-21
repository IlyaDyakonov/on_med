import { useEffect, useState } from "react";
import { getUserList } from "../../api/api";
import User from "./us";
import { UserTypeAdminPanel } from "../../models";


function UsersList() {
    const [renderedData, setRenderedData] = useState<UserTypeAdminPanel[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getUserList();
            const data = response;
            if (response !== null) {
                setRenderedData(data);
            }
        };

        fetchData();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Status</td>
                </tr>
            </thead>
            <tbody>
                {
                    renderedData
                        ? renderedData
                            .filter(user => user.is_doctor === true) // Оставляем только докторов
                            .map((user) => (
                                <User
                                    key={user.id}
                                    id={user.id}
                                    username={user.username}
                                    email={user.email}
                                    status={user.status}
                                />
                            ))
                        : null
                }
            </tbody>
        </table>
    )
}

export default UsersList;
