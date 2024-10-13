import { useState } from "react";

export function Score({ score, id }) {
  const [isPChecked, setisPChecked] = useState(false);
  const [isMChecked, setisMChecked] = useState(false);
  const [realScore, setrealScore] = useState(score);

  const handlePChange = (event) => {
    if (!isPChecked) {
      setrealScore(realScore + 1);
      setisMChecked(false);
      if (isMChecked) {
        setrealScore(realScore + 2);
      }
    } else {
      setrealScore(realScore - 1);
    }
    setisPChecked(event.target.checked);
  };
  const handleMChange = (event) => {
    if (!isMChecked) {
      setrealScore(realScore - 1);
      setisPChecked(false);
      if (isPChecked) {
        setrealScore(realScore - 2);
      }
    } else {
      setrealScore(realScore + 1);
    }
    setisMChecked(event.target.checked);
  };

  return (
    <div className="bg-LightGray p-4 px-2 flex flex-col justify-between items-center rounded-xl min-w-[40px] max-h-[95px] mr-5">
      <label htmlFor={`add${id}`} className="h-[11px] hover:cursor-pointer">
        <input
          type="checkbox"
          name={`add${id}`}
          id={`add${id}`}
          className="w-0 h-0 absolute"
          checked={isPChecked}
          onChange={handlePChange}
        />
        <img
          src="../src/assets/images/icon-plus.svg"
          alt={`add${id}`}
          className="relative"
        />
      </label>
      <p className="text-ModerateBlue font-bold">{realScore}</p>
      <label htmlFor={`subtract${id}`} className="h-[12px] flex hover:cursor-pointer">
        <input
          type="checkbox"
          name={`subtract${id}`}
          id={`subtract${id}`}
          className="w-0 h-0 absolute"
          checked={isMChecked}
          onChange={handleMChange}
        />
        <img
          src="../src/assets/images/icon-minus.svg"
          alt={`subtract${id}`}
          className="relative self-end"
        />
      </label>
    </div>
  );
}
