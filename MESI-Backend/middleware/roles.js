const AccessControl = require("accesscontrol");
const access = new AccessControl();

exports.roles = () => {
  access
    .grant("user")
    .readOwn("profile")
    .updateOwn("profile")
    .deleteOwn("user");

  access
    .grant("admin")
    .grant("user")
    .readOwn("profile")
    .updateOwn("profile")
    .deleteOwn("user");

  access
    .grant("superadmin")
    .extend("user")
    .extend("superadmin")
    .updateAny("profile")
    .deleteAny("profile");

  return access;
};
