import React from "react";
import What from "./5W/What";
import Why from "./5W/Why";
import When from "./5W/When";
import Where from "./5W/Where";
import Who from "./5W/Who";
import FirstReason from "./Reasons/FirstReason";
import SecondReason from "./Reasons/SecondReason";
import ThirdReason from "./Reasons/ThirdReason";
import FourthReason from "./Reasons/FourthReason";

function SwitchData(page) {
  const number = page.page;

  const switchReturn = (number) => {
    switch (number) {
      case 0:
        return <What />;
      case 1:
        return <Why />;
      case 2:
        return <FirstReason />;
      case 3:
        return <SecondReason />;
      case 4:
        return <ThirdReason />;
      case 5:
        return <FourthReason />;
      case 6:
        return <Who />;
      case 7:
        return <Where />;
      case 8:
        return <When />;
      default:
        return <What />;
    }
  };

  return <div className="dataContainer">{switchReturn(number)}</div>;
}

export default SwitchData;
