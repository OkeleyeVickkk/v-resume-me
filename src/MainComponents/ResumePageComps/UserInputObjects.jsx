const UserInputObjects = () => {
	// user initial state
	const userDetails = {
		position: {
			ariaLabel: "position",
			nameLabel: "position",
			inputMode: "text",
			value: "",
			type: "text",
		},
		image: {
			isImage: true,
			nameLabel: "Upload Photo",
			ariaLabel: "image",
			imageSrc: "",
		},
		lastname: {
			ariaLabel: "lastname",
			nameLabel: "lastname",
			inputMode: "text",
			value: "",
			type: "text",
		},
		firstname: {
			ariaLabel: "firstname",
			nameLabel: "firstname",
			inputMode: "text",
			value: "",
			type: "text",
		},

		email: {
			ariaLabel: "email",
			nameLabel: "email",
			type: "email",
			inputMode: "email",
			value: "",
		},
		phone: {
			ariaLabel: "phone",
			hasExtraInfo: true,
			tooltipData: "Start phone number with your country code if you are applying for a remote jon",
			type: "tel",
			nameLabel: "phone",
			inputMode: "numeric",
			value: "",
		},
		address: {
			ariaLabel: "address",
			nameLabel: "address",
			type: "text",
			inputMode: "text",
			value: "",
		},

		city: {
			ariaLabel: "city",
			nameLabel: "city",
			type: "text",
			inputMode: "text",
			value: "",
		},
		country: {
			ariaLabel: "country",
			hasExtraInfo: true,
			tooltipData: "If you're creating the resume for a remote job, you might want to fill this, else optional",
			nameLabel: "country",
			type: "text",
			inputMode: "text",
			value: "",
		},
		postalCode: {
			ariaLabel: "postalCode",
			nameLabel: "postal code",
			type: "text",
			inputMode: "text",
			value: "",
			hasExtraInfo: true,
			tooltipData: "If you are applying for job within your country, writing a postal code is considered optional",
		},

		nationality: {
			ariaLabel: "nationality",
			nameLabel: "nationality",
			type: "text",
			inputMode: "text",
			value: "",
			hasExtraInfo: true,
			tooltipData: "If you're applying for a job outside the country, you might want to fill this, otherwise you can leave it blank",
		},
		dob: {
			ariaLabel: "dob",
			nameLabel: "Date of Birth",
			type: "text",
			inputMode: "text",
			value: "",
		},
	};

	return { userDetails };
};

export default UserInputObjects;
