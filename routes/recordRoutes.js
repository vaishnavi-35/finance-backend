const router = require("express").Router();
const {
    createRecord,
    getRecords,
    deleteRecord,
    getSummary
} = require("../controllers/recordController");

const { protect, authorize } = require("../middleware/auth");

router.post("/", protect, authorize("admin"), createRecord);
router.get("/", protect, getRecords);
router.delete("/:id", protect, authorize("admin"), deleteRecord);
router.get("/summary", protect, getSummary);

module.exports = router;