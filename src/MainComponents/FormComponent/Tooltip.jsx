import React from "react";

const Tooltip = ({ className, data }) => {
	return (
		<div
			className={`absolute opacity-0 -translate-y-1/3 top-0 select-none left-1/2 -translate-x-1/2 z-10 rounded-md before:absolute before:-bottom-1 before:-translate-x-1/2 before:left-1/2 before:aspect-square before:w-3 before:p-1 before:bg-gray-800 border border-solid border-gray-50 shadow-sm p-2 text-xs w-48 before:shadow-md before:rounded-sm before:rotate-45 before:-z-10 bg-gray-800 text-gray-300 ${className} pointer-events-none`}>
			{data}
		</div>
	);
};

export default Tooltip;
