import type { User } from "../types";

export function UserDetails(user: User) {
  return (
    <section
      className="user-details-container"
      style={{
        // backgroundColor: "rgb(255, 0, 125, 0.3)",
        height: "400px",
        width: "50%",
        overflow: "scroll",
        boxShadow: "inset 0px 0px 0px 2px lightgrey",
        boxSizing: "border-box",
        padding: "8px",
      }}
    >
      {user ? (
        <>
          <div style={{ padding: "8px" }}>
            {/* TODO properly flex this row-wise */}
            <div className="user-data">
              <span style={{ fontSize: "14px", fontWeight: 600 }}>
                {"#"}
                {user.id}
              </span>
              <br />
              <span
                style={{
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 700,
                }}
              >
                {user.name}
              </span>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "gray",
                  marginLeft: "8px",
                }}
              >
                ({user.username})
              </span>
              <br />
              <span style={{ fontSize: "14px" }}>🌐 {user.website}</span>
            </div>
            <div
              className="extra-data"
              style={{
                marginTop: "34px",
                display: "flex",
                flexDirection: "row",
                gap: "0px",
                fontSize: "16px",
                fontWeight: 400,
              }}
            >
              <div
                className="address-data"
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  // a little fake line element in the middle, educate me, sensei 🥷
                  borderRight: "2px solid gray",
                  marginRight: "17px",
                }}
              >
                <span>{user.phone}</span>
                <span>{user.email}</span>
                <span>{user.address.street}</span>
                <span>{user.address.zipcode}</span>
                <span>{user.address.city}</span>
              </div>

              <div
                className="company-data"
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <span>{user.company.name}</span>
                <span>{user.company.catchPhrase}</span>
                <span>{user.company.bs}</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>No User selected.</p>
      )}
    </section>
  );
}
