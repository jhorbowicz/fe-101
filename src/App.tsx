import React from "react";
import { UserDetails } from "./components/UserDetails.tsx";
import { UserList } from "./components/UserList.tsx";
import type { User } from "./types.ts";

export function App() {
  const [allUsers, setAllUsers] = React.useState<User[]>([]);
  const [currentUsers, setCurrentUsers] = React.useState<User[]>([]);
  const [displayedUser, setDisplayedUser] = React.useState<User | null>(null);
  const [filterQuery, setFilterQuery] = React.useState<string>("");

  // initial fetch
  React.useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const fetchedUsers = (await response.json()) as User[];
      setCurrentUsers(fetchedUsers);
      setAllUsers(fetchedUsers);
    }
    fetchUsers();
  }, []);

  // displayed user
  React.useEffect(() => {
    if (currentUsers.length > 0) {
      setDisplayedUser(currentUsers[0]);
    }
  }, [currentUsers]);

  // list filter
  React.useEffect(() => {
    if (filterQuery.trim() === "") {
      setCurrentUsers(allUsers);
      return;
    }

    const lowerCaseQuery = filterQuery.toLowerCase();
    const filteredUsers = allUsers.filter((user) =>
      user.name.toLowerCase().includes(lowerCaseQuery)
    );
    setCurrentUsers(filteredUsers);
  }, [filterQuery]);

  return (
    <>
      {/* <header id="page-header" style={{ alignContent: "center", backgroundColor: "#ffffff", backgroundImage: "repeating-linear-gradient(-45deg, rgba(233, 136, 61, .35) 0, rgba(233, 136, 61, .35) 40px, transparent 0, transparent 50%)", backgroundSize: "60px 60px", color: "white", fontSize: "32px", fontWeight: "800", height: "60px", letterSpacing: "10px", textAlign: "center", }} > fe-101 </header> */}

      <main className="main-container">
        {displayedUser ? (
          <UserDetails user={displayedUser} />
        ) : (
          <p>Obligatory no data message 🥳</p>
        )}

        <UserList
          users={currentUsers}
          displayedUser={displayedUser}
          setDisplayedUser={(user: User) => () => setDisplayedUser(user)}
          setFilterQuery={setFilterQuery}
        />
      </main>

      {/* <footer id="page-footer" style={{ alignContent: "center", backgroundColor: "#ffffff", backgroundImage: "repeating-linear-gradient(45deg, rgba(250, 128, 114, .35) 0, rgba(250, 128, 114, .35) 40px, transparent 0, transparent 50%)", backgroundSize: "60px 60px", color: "white", fontSize: "32px", fontWeight: "800", height: "60px", letterSpacing: "10px", textAlign: "center", }} > timtrustedtesting Inc. </footer> */}
    </>
  );
}
