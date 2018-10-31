exports.ndidApiCallBackIp = process.env.NDID_API_CALLBACK_IP || 'docker.for.mac.localhost';
exports.ndidApiCallBackIpClient = process.env.NDID_API_CALLBACK_IP || 'localhost';
exports.ndidApiCallBackPort = process.env.NDID_API_CALLBACK_PORT || 5001;

exports.ndidServerIp = process.env.NDID_SERVER_IP || 'localhost';
exports.ndidServerPort = process.env.NDID_SERVER_PORT || 5000;

exports.ndidApiMasterIp = process.env.NDID_API_MASTER_IP || 'localhost';
exports.ndidApiMasterPort = process.env.NDID_API_MASTER_PORT || 8200

exports.timeout = 1
