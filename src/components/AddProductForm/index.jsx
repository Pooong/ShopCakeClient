import classNames from "classnames/bind";
import styles from "./AddProductForm.module.scss";
import { useState } from "react";
const cx = classNames.bind(styles);
import axios from "../../axios";
import instance from "../../axios";

function AddProductForm() {
	const [data, setData] = useState({
		name: "",
		desription: "",
		price: "",
	});
	function handlePostApi() {
		instance
			.post("/product/create", {
				body: data,
			})
			.then((res) => {
				alert(res.data);
			});
	}
	return (
		<div>
			<div>
				<div className={cx("input-group mt-4")}>
					<label for="typeProduct">Loại sản phẩn</label>
					<select name="typeProduct" id="typeProduct">
						<option value="cake">Cake</option>
						<option value="pizza">Pizza</option>
					</select>
				</div>

				<div className={cx("input-group mt-4")}>
					<label for="iconTypeProduct">Chọn Icon</label>
					<input
						type="input"
						className="form-control"
						id="iconTypeProduct"
						name="iconTypeProduct"
						placeholder="Nhập Icon"
					/>
				</div>

				<div className={cx("input-group mt-4")}>
					<label for="name">Tên sản phẩm</label>
					<input
						type="text"
						value={data.name}
						onChange={(e) => setData((pre) => ({ ...pre, name: e.target.value }))}
						className="form-control"
						id="name"
						name="name"
						placeholder="Nhập tên sản phẩm"
					/>
				</div>

				<div className={cx("input-group mt-4")}>
					<label for="description">Mô tả</label>
					<input
						type="text"
						value={data.desription}
						onChange={(e) => setData((pre) => ({ ...pre, desription: e.target.value }))}
						className="form-control"
						id="description"
						name="description"
						placeholder="Nhập mô tả"
					/>
				</div>
				<div className={cx("input-group mt-4")}>
					<label for="image">Hình ảnh</label>
					<input type="text" className="form-control" id="image" name="image" placeholder="Nhập hình ảnh" />
				</div>

				<div className={cx("input-group mt-4")}>
					<label for="price">Giá sản phẩm</label>
					<input type="text" className="form-control" id="price" name="price" placeholder="Nhập giá" />
				</div>
				<button className="btn btn-primary mt-4" onClick={handlePostApi}>
					Submit
				</button>
			</div>
		</div>
	);
}

export default AddProductForm;
