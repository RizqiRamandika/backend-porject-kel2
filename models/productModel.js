// import connection
import db from "../config/database.js";

// Get All Products
export const getProducts = (result) => {
    db.query("SELECT * FROM siswa", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Get Single Product
export const getProductById = (id, result) => {
    db.query("SELECT * FROM siswa WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

// Insert Product to Database
export const insertProduct = (data, result) => {
    db.query("INSERT INTO siswa SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Update Product to Database
export const updateProductById = (data, id, result) => {
    db.query("UPDATE siswa SET nama = ?, kelas = ? WHERE id = ?", [data.nama, data.kelas, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Delete Product to Database
export const deleteProductById = (id, result) => {
    db.query("DELETE FROM siswa WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}