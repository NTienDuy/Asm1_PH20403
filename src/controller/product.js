import dotenv from "dotenv";
import Product from "../models/product";
dotenv.config();

const getAll = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return res.status(404).json({
        message: "Khong co san pham nao",
      });
    }
    return res.json({
      message: "Lay danh sach thanh cong",
      products,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
const get = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    if (!products) {
      return res.status(404).json({
        message: "Khong tim thay san pham",
      });
    }
    return res.json({
      message: "Lay san pham thanh cong",
      products,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
const create = async (req, res) => {
  try {
    const products = await Product.create(req.body);
    if (!products) {
      return res.status(404).json({
        message: "Them san pham that bai",
      });
    }
    return res.json({
      message: "Them san pham thanh cong",
      products,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
const update = async (req, res) => {
  try {
    const products = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    if (!products) {
      return res.status(404).json({
        message: "Cap nhat san pham that bai",
      });
    }
    return res.json({
      message: "Cap nhat san pham thanh cong",
      products,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
const remove = async (req, res) => {
  try {
    const products = await Product.remove(req.params.id);
    if (!products) {
      return res.status(404).json({
        message: "Xoa san pham that bai",
      });
    }
    return res.json({
      message: "Xoa san pham thanh cong",
      products,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export { getAll, get, create, update, remove };
