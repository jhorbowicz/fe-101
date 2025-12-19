import React from "react";
import type { User } from "../types";

interface UserListProps {
  users: User[] | null;
  displayedUser: User | null;
  // robot made this signature
  // why is it `(user: User) => () => void` and not just `(user: User) => void` ?
  setDisplayedUser: (user: User) => () => void;
  setFilterQuery: React.Dispatch<React.SetStateAction<string>>;
}

export function UserList({
  users,
  displayedUser,
  setDisplayedUser,
  setFilterQuery,
}: UserListProps) {
  const [hoveredUserId, setHoveredUserId] = React.useState<number | null>(null);

  return (
    <section className="user-list-container">
      <div className="query-container">
        <input
          className="user-list-query-input"
          type="text"
          placeholder="Find"
          onChange={(e) => setFilterQuery(e.target.value)}
        />
      </div>
      <div className="user-list">
        {users?.map((user: User) => (
          <div
            className="user-list-item"
            key={user.id}
            onMouseEnter={() => setHoveredUserId(user.id)}
            onMouseLeave={() => setHoveredUserId(null)}
            onClick={setDisplayedUser(user)}
            style={{
              backgroundColor:
                user.id === displayedUser?.id
                  ? "#1b4ef452"
                  : user.id === hoveredUserId
                  ? "#d3d3d34f"
                  : "",
            }}
          >
            <div className="user-list-item-inner">
              <span className="user-list-item-id">
                {"#"}
                {user.id}
              </span>
              <div className="user-list-item-row">
                <div
                  className="user-list-item-user-data"
                  style={{
                    borderRight:
                      user.id === displayedUser?.id
                        ? "2px solid white"
                        : "2px solid lightgray",
                  }}
                >
                  <button
                    className="user-list-item-name"
                    style={{
                      color:
                        user.id === displayedUser?.id
                          ? "white"
                          : user.id === hoveredUserId
                          ? "#1b4ef4"
                          : "gray",
                    }}
                  >
                    {user.name}
                  </button>
                  <span className="user-list-item-city">
                    {user.address.city}
                  </span>
                </div>
                <div
                  className="user-list-item-company-data"
                  style={{
                    color: user.id === displayedUser?.id ? "white" : "gray",
                  }}
                >
                  <span className="user-list-item-company">
                    {user.company.name}
                  </span>
                  <span className="user-list-item-phone">{user.phone}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
