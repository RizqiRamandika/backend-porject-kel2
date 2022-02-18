import express from "express";
// import { getUsers, Register, Login, Logout } from "../controllers/users.js";
// import { verifyToken } from "../middleware/verifyToken.js";
// import { refreshToken } from "../controllers/refreshToken.js";
import { showProducts, showProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.js";

const router = express.Router();

router.get('/siswa', showProducts);

router.get('/siswa/:id', showProductById);

router.post('/siswa', createProduct);

router.put('/siswa/:id', updateProduct);

router.delete('/siswa/:id', deleteProduct);

// router.get('/users', verifyToken, getUsers);
// router.post('/users', Register);
// router.post('/login', Login);
// router.get('/token', refreshToken);
// router.delete('/logout', Logout);

// export default router
export default router;