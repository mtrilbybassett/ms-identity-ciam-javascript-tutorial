const { authProviderInstance }  = require('../auth/AuthProvider');

exports.signIn = async (req, res, next) => {
    return authProviderInstance.login(req, res, next);
};

exports.handleRedirect = async (req, res, next) => {
    return authProviderInstance.handleRedirect(req, res, next);
}

exports.signOut = async (req, res, next) => {
    return authProviderInstance.logout(req, res, next);
};