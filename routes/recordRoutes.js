const router = require("express").Router();

const {
    createRecord,
    getRecords,
    updateRecord,
    deleteRecord,
    getSummary
} = require("../controllers/recordController");

const { protect, authorize } = require("../middleware/auth");

// Create (Admin only)
router.post("/", protect, authorize("admin"), createRecord);

// Get all records
router.get("/", protect, getRecords);

// Summary (Analyst + Admin)
router.get("/summary", protect, authorize("analyst", "admin"), getSummary);

// Update (Admin only)
router.put("/:id", protect, authorize("admin"), updateRecord);

// Delete (Admin only)
router.delete("/:id", protect, authorize("admin"), deleteRecord);

module.exports = router;