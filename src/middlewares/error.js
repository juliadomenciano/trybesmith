"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (err, _req, res) {
    var name = err.name, message = err.message;
    switch (name) {
        case 'ValidationError':
            return res.status(400).json({ message: message });
            break;
        case 'NotFoundError':
            return res.status(404).json({ message: message });
            break;
        case 'Authorization':
            return res.status(401).json({ message: message });
            break;
        case 'LengthValidation':
            return res.status(422).json({ message: message });
            break;
        default:
            return res.status(500).json({ message: message });
            break;
    }
});
