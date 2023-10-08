import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../models/User.js';
import { JWT_SECRET } from '../constants.js';

// READ
export const getUsers = async (req, res) => {
  try {
    const user = await UserModel.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Resgister User
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      name,
      email,
      password: passwordHash,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

// Login In
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: 'USER NOT EXIST' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'INVALID CREDENTIALS' });

    // Create a new object without the password property
    const userWithoutPassword = { ...user.toObject() };
    delete userWithoutPassword.password;

    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    res.status(200).json({ token, user: userWithoutPassword });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};
// Login Using Google
export const loginByGmail = async (req, res) => {
  try {
    const { name, email } = req.body;
    let user = await UserModel.findOne({ email: email });
    if (!user) {
      const newUser = new UserModel({
        name,
        email,
        loginMode: 'google',
      });
      user = await newUser.save();
      const token = jwt.sign({ id: user._id }, JWT_SECRET);
      res.status(200).json({ token, user });
    } else {
      console.log('user already existes');
      const token = jwt.sign({ id: user._id }, JWT_SECRET);
      res.status(200).json({ token, user });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

// Update user score
export const updateUserScore = async (req, res) => {
  try {
    const { score } = req.body;
    const { id } = req.params;
    const user = await UserModel.findById(id);
    const updatedScore = user.totalScore + score;
    user.totalScore = updatedScore;
    await user.save();
    return res.status(200).json({ updatedScore });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};
