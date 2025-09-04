import PropTypes from "prop-types";
function Usergreeting({ name = "Dendup", isLogin = true }) {
  const WelcomeMessage = "Hello " + name;
  const LogoutMessage = "You are log out";
  if (isLogin) {
    return (
      <div className="flex mb-4">
        <div className="w-full bg-green-500">
          <h1 className="text-white">{WelcomeMessage}</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex mb-4">
        <div className="w-full bg-red-500">
          <h1 className="text-white">{LogoutMessage}</h1>
        </div>
      </div>
    );
  }
}

Usergreeting.propTypes = {
  name: PropTypes.string,
  isLogin: PropTypes.bool,
};

export default Usergreeting;
