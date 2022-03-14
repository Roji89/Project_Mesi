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
    .readOwn("profile")
    .updateOwn("profile")
    .deleteOwn("profile");

  access
    .grant("superadmin")
    .extend("user")
    .extend("admin")
    .readAny("profile")
    .updateAny("profile")
    .deleteAny("profile");

  return access;
};
