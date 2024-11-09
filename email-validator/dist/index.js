"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const email_validator_1 = __importDefault(require("email-validator"));
const app = (0, express_1.default)();
const port = 5000;
app.use(express_1.default.json());
app.post("/validate-email", (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).send("Email is required");
    }
    const isValid = email_validator_1.default.validate(email);
    if (isValid) {
        return res.status(200).send("Valid email");
    }
    else {
        return res.status(400).send("Invalid email");
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
