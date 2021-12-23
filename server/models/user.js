const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// category
// speciality
// fullname
// username
// email
// password
// phone
// address
// city

const userSchema = mongoose.Schema(
	{
		category: String,
		specialty : { type: String, default: "" },
		fullname: String,
		username: { type: String, unique: true },
		email   : String,
		password: String,
		phone   : String,
		address : String,
		city    : String,
		service : { type: String, default: "" },
		rating  : { type: Number, default: 0 },
		gender  : { type: String, default: "" },
		picture : { type: String, default: "https://www.bootdey.com/img/Content/avatar/avatar7.png" },
	},
	{ timestamps: true }
);

userSchema.statics.login = async function (username, plainTextPassword) {
	const foundUser = await this.findOne({ username });
	if (foundUser) {
		const success = await bcrypt.compare(
			plainTextPassword,
			foundUser.password
		);
		if (success) return foundUser;
		else throw Error("Incorrect username/password");
	} else throw Error("Username not exist");
};

userSchema.pre("save", async function (next) {
	this.password = await bcrypt.hash(this.password, 12);
	next();
});

module.exports = mongoose.model("User", userSchema);
