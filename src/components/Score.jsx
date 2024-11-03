import { useState } from "react";

export function Score({ score, id }) {
  const [isPChecked, setisPChecked] = useState(false);
  const [isMChecked, setisMChecked] = useState(false);
  const [realScore, setrealScore] = useState(score);
  const plusButton = document.getElementById(`addImg${id}`);
  const minusButton = document.getElementById(`subtractImg${id}`);

  const handlePChange = (event) => {
    if (!isPChecked) {
      setrealScore(realScore + 1);
      plusButton.src = "../src/assets/images/icon-plus-pressed.svg";
      setisMChecked(false);
      if (isMChecked) {
        setrealScore(realScore + 2);
        minusButton.src = "../src/assets/images/icon-minus.svg";
      }
    } else {
      setrealScore(realScore - 1);
      plusButton.src = "../src/assets/images/icon-plus.svg";
    }
    setisPChecked(event.target.checked);
  };
  const handleMChange = (event) => {
    if (!isMChecked) {
      setrealScore(realScore - 1);
      minusButton.src = "../src/assets/images/icon-minus-pressed.svg";
      setisPChecked(false);
      if (isPChecked) {
        setrealScore(realScore - 2);
        plusButton.src = "../src/assets/images/icon-plus.svg";
      }
    } else {
      setrealScore(realScore + 1);
      minusButton.src = "../src/assets/images/icon-minus.svg";
    }
    setisMChecked(event.target.checked);
  };

  return (
    <div className="bg-LightGray p-4 px-2 flex flex-col justify-between items-center rounded-xl min-w-[40px] max-h-[95px] mr-5 max-tn:flex-row max-tn:self-start max-tn:w-[100px] max-tn:h-[35px] max-tn:content-center max-tn:mr-[128.32px]">
      <label
        htmlFor={`add${id}`}
        className="h-[11px] hover:cursor-pointer text-LightGrayishBlue"
      >
        <input
          type="checkbox"
          name={`add${id}`}
          id={`add${id}`}
          className="w-0 h-0 absolute"
          checked={isPChecked}
          onChange={handlePChange}
        />
        <img
          id={`addImg${id}`}
          src="../src/assets/images/icon-plus.svg"
          alt={`add${id}`}
          className="relative"
        />
      </label>
      <p className="text-ModerateBlue font-bold">{realScore}</p>
      <label
        htmlFor={`subtract${id}`}
        className="h-[12px] flex hover:cursor-pointer"
      >
        <input
          type="checkbox"
          name={`subtract${id}`}
          id={`subtract${id}`}
          className="w-0 h-0 absolute"
          checked={isMChecked}
          onChange={handleMChange}
        />
        <img
          id={`subtractImg${id}`}
          src="../src/assets/images/icon-minus.svg"
          alt={`subtract${id}`}
          className="relative self-center"
        />
      </label>
    </div>
  );
}
