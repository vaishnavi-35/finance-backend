const Record = require("../models/Record");

// CREATE RECORD
exports.createRecord = async (req, res) => {
    try {
        const { amount, type, category, date, note } = req.body;

        if (!amount || !type) {
            return res.status(400).json({ message: "Amount and type are required" });
        }

        const record = await Record.create({
            amount,
            type,
            category,
            date,
            note,
            user: req.user.id
        });

        res.status(201).json(record);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET RECORDS
exports.getRecords = async (req, res) => {
    try {
        const records = await Record.find({ user: req.user.id });
        res.json(records);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE RECORD
exports.updateRecord = async (req, res) => {
    try {
        const record = await Record.findById(req.params.id);

        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }

        const updated = await Record.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updated);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE RECORD
exports.deleteRecord = async (req, res) => {
    try {
        const record = await Record.findById(req.params.id);

        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }

        await Record.findByIdAndDelete(req.params.id);

        res.json({ message: "Record deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// SUMMARY
exports.getSummary = async (req, res) => {
    try {
        const records = await Record.find({ user: req.user.id });

        let income = 0;
        let expense = 0;

        records.forEach((r) => {
            if (r.type === "income") {
                income += r.amount || 0;
            } else if (r.type === "expense") {
                expense += r.amount || 0;
            }
        });

        res.json({
            totalIncome: income,
            totalExpense: expense,
            netBalance: income - expense
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};