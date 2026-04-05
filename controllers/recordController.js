const Record = require("../models/Record");


exports.createRecord = async (req, res) => {
    try {
        const record = await Record.create({
            amount: req.body.amount,
            type: req.body.type,
            category: req.body.category,
            date: req.body.date,
            note: req.body.note,
            user: req.user.id
        });

        res.status(201).json(record);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getRecords = async (req, res) => {
    try {
        const records = await Record.find({ user: req.user.id });
        res.json(records);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteRecord = async (req, res) => {
    try {
        const record = await Record.findByIdAndDelete(req.params.id);

        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }

        res.json({ message: "Record deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getSummary = async (req, res) => {
    try {
        const records = await Record.find({ user: req.user.id });

        let income = 0;
        let expense = 0;

        records.forEach((r) => {
            if (r.type === "income") {
                income += r.amount || 0;
            } 
            else if (r.type === "expense") {
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