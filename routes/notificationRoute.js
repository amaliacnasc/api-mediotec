const express = require("express");
const router = express.Router(); 
const notifications = require('../controllers/notificationController'); 

router.post('/', notifications.createNotification); 
router.get('/', notifications.getAllNotifications);
router.get('/notification/:id', notifications.getNotificationById);
router.put('/notification/:id', notifications.updateNotificationById); 
router.delete('/notification/:id', notifications.deleteNotificationById); 

module.exports = router;