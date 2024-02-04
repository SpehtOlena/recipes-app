import { Button, Form, Input, Select, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import './NewRecipe.css';
import FormItem from 'antd/es/form/FormItem';

const NewRecipe = ({ data, setData, setActivePage }) => {
	const onFinish = (values) => {
		setData([...data, values])
		console.log(values);
		form.resetFields();
	};
	const [form] = Form.useForm();
	return (
		<Form name={"NewRecipe"} onFinish={onFinish} form={form}>
			<FormItem name={'recipeName'} label={'Назва страви'} rules={[
				{
					required: true,
					message: "Введіть назву страви"
				}
			]}>
				<Input />
			</FormItem>
			<FormItem name={'category'} label={'Категорія страви'} rules={[
				{
					required: true,
				}
			]}>
				<Select placeholder={'Категорія страви'}>
					<Select.Option value="Супи">Супи</Select.Option>
					<Select.Option value="Салати">Салати</Select.Option>
					<Select.Option value="Основні страви">Основні страви</Select.Option>
					<Select.Option value="Десерти">Десерти</Select.Option>
				</Select>
			</FormItem>
			<FormItem name={'photoUrl'} label={'Фото страви'}
				rules={[
					{
						required: true,
					}
				]}>
				<Input />
			</FormItem>

			<Form.List name="ingredients">
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
									rules={[{ required: true, message: 'Missing first name' }]}
								>
									<Input placeholder="Інгридієнт" />
								</Form.Item>
								<MinusCircleOutlined onClick={() => remove(name)} />
							</Space>
						))}

					</>
				)}
			</Form.List>

			<Button type="primary" htmlType="submit">Submit</Button>
		</Form>
	)
}
export default NewRecipe