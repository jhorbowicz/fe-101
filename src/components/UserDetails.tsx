import type { User } from "../types";

export function UserDetails(user: User) {
  return (
    <section className="user-details-container">
      {user ? (
        <>
          <div className="user-details-inner">
            {/* TODO properly flex `.user-data` */}
            <div className="user-data">
              <span className="user-id">
                {"#"}
                {user.id}
              </span>
              <br />
              <span className="user-name">{user.name}</span>
              <span className="user-username">({user.username})</span>
              <br />
              <span className="user-website">🌐 {user.website}</span>
            </div>
            <div className="extra-data">
              <div className="address-data">
                <span>{user.phone}</span>
                <span>{user.email}</span>
                <span>{user.address.street}</span>
                <span>{user.address.zipcode}</span>
                <span>{user.address.city}</span>
              </div>

              <div className="company-data">
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
