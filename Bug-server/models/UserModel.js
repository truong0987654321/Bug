// UserModel.js
import { push, set, get, child, update } from "firebase/database";
import { ref as dbRef } from 'firebase/database'; // ref cho Database
import { getDownloadURL, listAll, ref as storageRef } from 'firebase/storage'; // ref cho Storage
import bcrypt, { genSalt } from 'bcrypt';
import config from '../config.js';

const saltRounds = await genSalt();
const db = config.db;
const storage = config.storage;

const usersRef = dbRef(db, 'users');

const folderRef = storageRef(storage, 'user/');
export const addUser = async (user) => {
    try {
        // Hash mật khẩu
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);

        const newUserRef = push(usersRef);

        // Lưu thông tin người dùng
        await set(newUserRef, {
            email: user.email,
            password: hashedPassword,
            username: user.username || '',
            gender: user.gender || 'secret',
            img: user.img || null,
            color: user.color || null,
            createdAt: new Date().toISOString(), // Thêm ngày tạo
            profileSetup: user.profileSetup || false, // Thêm thuộc tính profileSetup
        });

        // Lấy lại thông tin người dùng đã lưu
        const snapshot = await get(newUserRef);
        return { id: newUserRef.key, ...snapshot.val() }; // Trả về thông tin người dùng
    } catch (error) {
        console.error("Error adding user:", error);
        return { success: false, error: error.message };
    }
};
export const getUserByEmail = async (email) => {

    const snapshot = await get(usersRef);
    const users = snapshot.val();

    // Tìm người dùng dựa trên email
    for (const userId in users) {
        if (users[userId].email === email) {
            return { id: userId, ...users[userId] }; // Trả về thông tin người dùng
        }
    }
    return null; // Không tìm thấy người dùng
};

export const getUserById = async (userId) => {
    try {
        const userRef = child(usersRef, userId); // Truy cập vào userId bên trong users
        const snapshot = await get(userRef); // Lấy dữ liệu người dùng

        if (!snapshot.exists()) {
            return null; // Nếu không tìm thấy người dùng
        }

        const userData = snapshot.val(); // Lấy dữ liệu người dùng
        userData.id = userId; // Gán id vào userData nếu bạn muốn bao gồm id trong dữ liệu trả về

        return userData; // Trả về thông tin người dùng bao gồm id
    } catch (error) {
        console.error("Error getting user by ID:", error);
        throw error; // Ném lỗi để controller xử lý
    }
};
export const updateUserById = async (userId, updates) => {
    try {
        const userRef = child(usersRef, userId); // Truy cập vào userId bên trong users
        await update(userRef, updates); // Cập nhật dữ liệu người dùng

        // Lấy lại thông tin người dùng đã cập nhật
        const snapshot = await get(userRef);
        return { id: userId, ...snapshot.val() }; // Trả về thông tin người dùng đã cập nhật
    } catch (error) {
        console.error("Error updating user by ID:", error);
        return { success: false, error: error.message };
    }
};
export const listAllFiles = async () => {
    try {

        const res = await listAll(folderRef);

        // Tạo một mảng chứa các URL tải xuống cho tất cả các tệp trong thư mục
        const files = await Promise.all(
            res.items.map(async (itemRef) => {
                const url = await getDownloadURL(itemRef);
                return {
                    name: itemRef.name,
                    url: url
                };
            })
        );
        return files;
    } catch (error) {
        console.error("Error updating user by ID:", error);
        throw error;
    }
};