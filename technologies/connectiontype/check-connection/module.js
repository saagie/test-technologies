
exports.checkConnection = async ({ connection }) => {
    return {
        ok: connection.ok,
        message: connection.message
    };
};
