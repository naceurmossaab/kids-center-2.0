const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
	{
		gender: String,
		fullName: String,
		userName: { type: String, unique: true },
		location: String,
		email: String,
		mobile: String,
		categorie: String,
		service: { type: String, default: "" },
		rating: { type: Number, default: 0 },
		password: String,
		picture: {
			type: String,
			default: "https://www.bootdey.com/img/Content/avatar/avatar7.png",
		},
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
