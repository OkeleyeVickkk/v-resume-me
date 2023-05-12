// import React, { useContext, useEffect, useRef } from "react";
import PersonalDetails from "./BasicTemplateComponents/PersonalDetails";
import "../assets/css/fonts.css";
import { memo } from "react";

const BasicTemplate = () => {
	// const zoomRef = useRef();
	// useEffect(() => {
	// 	// Change zoom level on mount
	// 	zoomRef.current.style.zoom = "80%";

	// 	return () => {
	// 		// Restore default value
	// 		zoomRef.current.style.zoom = "100%";
	// 	};
	// });

	return (
		<div className={`bg-white min-h-[100vh] p-4 grid grid-cols-3 gap-4 text-center`}>
			<section className="col-span-1 bg-[#DEAB52] py-4 px-3">
				<PersonalDetails />
			</section>
			<section className="col-span-2 text-xs">
				<div className="">
					<h3 className="uppercase font-semibold text-slate-900 tracking-wider">Summary</h3>
					<div>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed magnam vitae beatae fuga! Quaerat exercitationem ab sequi culpa
						in similique impedit quae ipsum, et eius aliquam, maiores dolor, nostrum saepe?
						<br />
						<br />
						0 <br />
						1 <br />
						2 <br />
						3 <br />
						4 <br />
						5 <br />
						6 <br />
						7 <br />
						8 <br />
						9 <br />
					</div>
				</div>
			</section>
		</div>
	);
};

export default memo(BasicTemplate);
