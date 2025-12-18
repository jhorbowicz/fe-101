import React from "react";
import type { User } from "../types";

interface UserListProps {
  users?: User[] | null;
  selectedUser?: User | null;
  setSelectedUser?: (user: User) => () => void;
}

export function UserList({
  users,
  selectedUser,
  setSelectedUser,
}: UserListProps) {
  const [hoveredUserId, setHoveredUserId] = React.useState<number | null>(null);

  return (
    <section
      className="user-list-container"
      style={{
        height: "400px",
        width: "50%",
        overflowY: "scroll",
        boxShadow: "inset 0px 0px 0px 2px lightgrey",
      }}
    >
      <div
        className="user-list"
        style={{
          display: "flex",
          flexDirection: "column",

          maxHeight: "inherit",
          overflow: "scroll",
        }}
      >
        {users?.map((user: User) => (
          <div
            className="user-list-item"
            key={user.id}
            onMouseEnter={() => setHoveredUserId(user.id)}
            onMouseLeave={() => setHoveredUserId(null)}
            style={{
              backgroundColor:
                user.id === selectedUser?.id
                  ? "#1b4ef452"
                  : user.id === hoveredUserId
                  ? "#d3d3d34f"
                  : "",
              margin: "0px",
              display: "flex",
              flexDirection: "row",
              padding: "12px 18px",
              borderBottom: "2px solid lightgray",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              <span
                className="user-list-item-id"
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "gray",
                }}
              >
                {"#"}
                {user.id}
              </span>
              <div
                style={{
                  widows: "100%",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div
                  className="user-list-item-user-data"
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "8px",
                    borderRight:
                      user.id === selectedUser?.id
                        ? "2px solid white"
                        : "2px solid lightgray",
                  }}
                >
                  {/* TODO - Cannot invoke an object which is possibly 'undefined'.ts(2722) */}
                  <a
                    className="user-list-item-name"
                    onClick={setSelectedUser(user)}
                    style={{
                      cursor: "pointer",
                      fontWeight: 700,
                      fontSize: "18px",
                      color:
                        user.id === selectedUser?.id
                          ? "white"
                          : user.id === hoveredUserId
                          ? "#1b4ef4"
                          : "gray",
                      width: "fit-content",
                    }}
                  >
                    {user.name}
                  </a>
                  <span
                    className="user-list-item-city"
                    style={{ fontSize: "12px", fontWeight: 400, color: "gray" }}
                  >
                    {user.address.city}
                  </span>
                </div>
                <div
                  className="user-list-item-company-data"
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "8px",
                    fontWeight: 400,
                    color: user.id === selectedUser?.id ? "white" : "gray",
                  }}
                >
                  <span
                    className="user-list-item-company"
                    style={{ fontSize: "18px" }}
                  >
                    {user.company.name}
                  </span>
                  <span
                    className="user-list-item-phone"
                    style={{ fontSize: "12px" }}
                  >
                    {user.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
