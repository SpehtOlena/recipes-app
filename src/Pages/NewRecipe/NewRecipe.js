import { Button, Form, Input, Select, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import './NewRecipe.css';
import FormItem from 'antd/es/form/FormItem';
import Search from '../Search/Search';
import ButtonRadius from '../../styledComponents/ButtonRadius';
import axios from 'axios';

const NewRecipe = ({ recipes, setRecipes }) => {
	const onFinish = (values) => {
		axios
			.post('http://localhost:3000/recipes', values)
			.then(res => setRecipes([...recipes, res.data]))
	};
	const [form] = Form.useForm();
	return (
		<div className={'form-container'}>
			<Form name={"NewRecipe"} onFinish={onFinish} form={form}>
				<FormItem name={'category'} label={'Категорія страви'} rules={[
					{
						required: true,
					}
				]}>
					<Select>
						<Select.Option value="Супи">Супи</Select.Option>
						<Select.Option value="Салати">Салати</Select.Option>
						<Select.Option value="Основні страви">Основні страви</Select.Option>
						<Select.Option value="Десерти">Десерти</Select.Option>
					</Select>
				</FormItem>
				<FormItem name={'recipeName'} label={'Назва страви'} rules={[
					{
						required: true,
						message: "Введіть назву страви"
					}
				]}>
					<Input />
				</FormItem>

				<FormItem name={'description'} label={'Опис страви'} rules={[
					{
						required: true,
						message: "Введіть опис страви"
					}
				]}>
					<Input />
				</FormItem>
				<FormItem name={'photoUrl'} label={'Фото страви'}
					rules={[
						{
							required: true,
							message: "Додайте фото страви"
						}
					]}>
					<Input />
				</FormItem>

				<Form.List name="ingredients" rules={[
					{
						required: true,
						message: "Додайте інгредієнти страви страви"
					}
				]}>
					{(fields, { add, remove }) => (
						<>
							<Form.Item>
								<Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
									Додати основні інгредієнти
								</Button>
							</Form.Item>
							{fields.map(({ key, name, ...restField }) => (
								<Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
									<Form.Item
										{...restField}
										name={[name]}
										rules={[{ required: true, message: 'Вкажіть основні інгредієнти' }]}
									>
										<Input placeholder="Інгридієнт" />
									</Form.Item>
									<MinusCircleOutlined onClick={() => remove(name)} />
								</Space>
							))}

						</>
					)}
				</Form.List>
				<Form.List name="cooking" rules={[
					{
						required: true,
						message: "Вкажіть план приготування страви"
					}
				]}>
					{(fields, { add, remove }) => (
						<>
							<Form.Item>
								<Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
									Додати етап приготування
								</Button>
							</Form.Item>
							{fields.map(({ key, name, ...restField }) => (
								<Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
									<Form.Item
										{...restField}
										name={[name]}
										rules={[{ required: true, message: 'Вкажіть план приготування страви' }]}
									>
										<Input placeholder="Етап приготування" />
									</Form.Item>
									<MinusCircleOutlined onClick={() => remove(name)} />
								</Space>
							))}

						</>
					)}
				</Form.List>
				<ButtonRadius $primary htmlType="submit">Submit</ButtonRadius>
			</Form>
		</div>
	)
}
export default NewRecipe