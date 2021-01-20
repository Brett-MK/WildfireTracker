import React from "react";
import LocationIcon from "@iconify/icons-mdi/fire-alert";
import Icon from "@iconify/react";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Icon icon={LocationIcon} />
        Wildfire Tracker (Powered By NASA)
      </h1>
    </header>
  );
};

export default Header;
