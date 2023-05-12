import React from "react";

const Input = ({ ariaLabel, placeholder, type, label }) => {
	return (
		<React.Fragment>
			<div className={`relative flex-grow`}>
				<label
					htmlFor={label}
					className={`text-slate-300 absolute top-0 left-0 leading-none -translate-y-[.4rem] translate-x-2 bg-custom_2 px-1 text-[.85rem]`}>
					{label}
				</label>
				<input
					className="bg-transparent text-slate-300 text-[.9rem] border-gray-500 outline-none border-[1.5px] rounded-md min-h-[3rem] w-full p-2 px-3 transition duration-500 ease-in-out focus:border-main focus:shadow-inputShadow placeholder:text-[.8rem]"
					spellCheck="false"
					autoComplete="false"
					id={label}
					onChange={(e) => console.log(e.target.value)}
					placeholder={placeholder}
					type={type}
					aria-label={ariaLabel}
				/>
			</div>
		</React.Fragment>
	);
};

export default Input;
