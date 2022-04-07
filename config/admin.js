module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7b5e6036301ea28c6bb02d4c6094e683'),
  },
});
