// AuthController.js
import { addUser, getUserByEmail, getUserById, listAllFiles, updateUserById } from '../models/UserModel.js';
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt';

// const maxAge = 3 * 24 * 60 * 1000;
// const createToken = (email, userId) => {
//     return jwt.sign({ email, userId }, process.env.JWT_KEY, { expiresIn: maxAge });
// };
const createToken = (email, userId) => {
    return jwt.sign({ email, userId }, process.env.JWT_KEY);
};
export const signup = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Kiểm tra nếu email hoặc password không được cung cấp
        if (!email || !password) {
            return res.status(400).send("Email and Password are required");
        }

        // Gọi hàm thêm người dùng và nhận ID
        const user = await addUser({ email, password });

        // Kiểm tra xem ID có hợp lệ không
        if (!user) {
            return res.status(400).json({ error: "Failed to add user" });
        }

        // Lưu thông tin người dùng vào cookie (nếu cần)
        // res.cookie("jwt", createToken(email, user.id), { maxAge, sameSite: 'None', secure: true });
        res.cookie("jwt", createToken(email, user.id), { sameSite: 'None', secure: true });

        // Nếu thành công, trả về thông tin người dùng dưới dạng JSON
        return res.status(200).json({
            user: {
                id: user.id,
                email: user.email,
                bg: user.bg,
                gender: user.gender,
                profileSetup: user.profileSetup,
                username: user.username,
                img: user.img,
                color: user.color,
                createdAt: user.createdAt,
            }
        });
    } catch (error) {
        console.log({ error });
        return res.status(500).send("Internal Server Error");
    }
};
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send("Email and Password are required");
        }
        // Lấy thông tin người dùng theo email
        const user = await getUserByEmail(email); // Cần phải định nghĩa hàm này trong UserModel.js

        // Kiểm tra xem người dùng có tồn tại không
        if (!user) {
            return res.status(404).send("Invalid email or password");
        }

        // So sánh mật khẩu đã nhập với mật khẩu đã lưu
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send("Password is incorrect.");
        }
        // Tạo token và lưu vào cookie (có tuổi)
        // res.cookie("jwt", createToken(user.email, user.id), { maxAge, sameSite: 'None', secure: true });

        res.cookie("jwt", createToken(user.email, user.id), { sameSite: 'None', secure: true });

        // Trả về thông tin người dùng (có thể tùy chỉnh theo ý bạn)
        return res.status(200).json({
            user: {
                id: user.id,
                email: user.email,
                bg: user.bg,
                gender: user.gender,
                profileSetup: user.profileSetup,
                username: user.username,
                img: user.img,
                color: user.color,
                createdAt: user.createdAt,
            }
        });
    } catch (error) {
        console.log({ error });
        return res.status(500).send("Internal Server Error");
    }
}
export const getUserInfo = async (req, res, next) => {
    try {
        const userData = await getUserById(req.userId);
        if (!userData) {
            return res.status(404).send("User with the given id not found.")
        }
        return res.status(200).json({
            id: userData.id,
            email: userData.email,
            bg: userData.bg,
            gender: userData.gender,
            profileSetup: userData.profileSetup,
            username: userData.username,
            img: userData.img,
            color: userData.color,
            createdAt: userData.createdAt,
        });


    } catch (error) {
        console.log({ error })
        return res.status(500).send("Internal Sever Error.")
    }
}
export const updateProfile = async (req, res, next) => {
    try {

        const userId = req.userId;;
        const { username, gender } = req.body;
        const userData = await updateUserById(userId, {
            username,
            gender,
        });
        if (!username || !gender) {
            return res.status(404).send("Username and gender is required.");
        }
        return res.status(200).json({
            id: userData.id,
            email: userData.email,
            bg: userData.bg,
            gender: userData.gender,
            profileSetup: userData.profileSetup,
            username: userData.username,
            img: userData.img,
            color: userData.color,
            createdAt: userData.createdAt,
        });


    } catch (error) {
        console.log({ error })
        return res.status(500).send("Internal Sever Error.")
    }
}
export const getAllFiles = async (req, res) => {
    try {
        const files = await listAllFiles();
        return res.status(200).json({
            success: true,
            data: files,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Lỗi khi lấy danh sách tệp: ${error.message}`,
        });
    }
};