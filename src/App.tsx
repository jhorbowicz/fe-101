import React from "react";
import { UserDetails } from "./components/UserDetails.tsx";
import { UserList } from "./components/UserList.tsx";
import type { User } from "./types.ts";

export function App() {
  const [users, setUsers] = React.useState<User[]>([]);
  const [selectedUser, setSelectedUser] = React.useState<User | null>(null);

  // Should rather be provided by a context later on when/if we fetch more data?
  React.useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers((await response.json()) as User[]);
    }
    fetchUsers();
  }, []);

  // Will this only run on first render?
  React.useEffect(() => {
    if (selectedUser !== null) return;

    if (users.length > 0) {
      setSelectedUser(users[0]);
    }
  }, [users]);

  return (
    <>
      {/* <header id="page-header" style={{ alignContent: "center", backgroundColor: "#ffffff", backgroundImage: "repeating-linear-gradient(-45deg, rgba(233, 136, 61, .35) 0, rgba(233, 136, 61, .35) 40px, transparent 0, transparent 50%)", backgroundSize: "60px 60px", color: "white", fontSize: "32px", fontWeight: "800", height: "60px", letterSpacing: "10px", textAlign: "center", }} > fe-101 </header> */}

      <main
        id="page-content"
        style={{
          display: "flex",
          flexDirection: "row",
          height: "400px",
          gap: "20px",
          padding: "20px",
        }}
      >
        {/* It wouldn't allow `<UserDetails user={selectedUser} />`. Why? */}
        {selectedUser ? (
          <UserDetails {...selectedUser} />
        ) : (
          <p>Obligatory no data message 🥳</p>
        )}

        {users.length > 0 ? (
          <UserList
            users={users}
            selectedUser={selectedUser}
            setSelectedUser={(user: User) => () => setSelectedUser(user)}
          />
        ) : (
          <p>Obligatory no data message 🥳</p>
        )}
      </main>

      {/* <footer id="page-footer" style={{ alignContent: "center", backgroundColor: "#ffffff", backgroundImage: "repeating-linear-gradient(45deg, rgba(250, 128, 114, .35) 0, rgba(250, 128, 114, .35) 40px, transparent 0, transparent 50%)", backgroundSize: "60px 60px", color: "white", fontSize: "32px", fontWeight: "800", height: "60px", letterSpacing: "10px", textAlign: "center", }} > timtrustedtesting Inc. </footer> */}
    </>
  );
}
