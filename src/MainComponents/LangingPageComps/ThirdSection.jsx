import React, { memo } from "react";
import image from "../../assets/images/PageImages/cv-woman.svg";
import downloadformat from "../../assets/images/PageImages/download-types.svg";
import documentFormat from "../../assets/images/PageImages/document-svg.svg";
import { Link } from "react-router-dom";

const ThirdSection = () => {
	return (
		<div className="dark:bg-dark_theme_text_clr py-28 bg-white">
			<div className="grid grid-cols-2 p-4 md:px-16 gap-20">
				<div className="col-span-full md:col-start-1 md:col-end-2 flex flex-col justify-center gap-y-8">
					<div className="flex items-center flex-col-reverse md:flex-row justify-center md:justify-around text-center rounded-[12px] overflow-hidden p-3">
						<div className="flex flex-col gap-y-4">
							<h3 className="font-semibold text-xl text-main">Download Your Resume</h3>
							<span className="block text-sm dark:text-label_clr">Create your resume and download it in a PDF (.pdf) or DOCX (.docx) format.</span>
						</div>
						<div className="max-w-[16rem] dark:bg-main">
							<figure>
								<img src={downloadformat} alt="" className="" />
							</figure>
						</div>
					</div>
					<div className="flex items-center  flex-col-reverse md:flex-row justify-center md:justify-around text-center rounded-[12px] overflow-hidden p-3">
						<div className="flex flex-col gap-y-4">
							<h3 className="font-semibold text-xl text-main">Multi-theme Resume</h3>
							<span className="block text-sm dark:text-label_clr">
								Sweet to let you know that you can have your resume in different theme of options.
							</span>
						</div>
						<div className="max-w-[16rem] dark:bg-main">
							<img src={documentFormat} alt="" />
						</div>
					</div>
					<div className="text-center">
						<Link
							to="/select-template"
							className="text-white bg-main hover:bg-hoverBgClr transition ease-in-out duration-500 selection:bg-main text-sm font-bold py-4 px-6 rounded-md">
							Create my Resume
						</Link>
					</div>
				</div>
				<div className="col-span-full md:col-start-2 md:col-end-3 flex items-center">
					<figure className="w-4/5 mx-auto">
						<img src={image} alt="woman-with-resume-image" />
					</figure>
				</div>
			</div>
		</div>
	);
};

export default memo(ThirdSection);
