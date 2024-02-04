import { Button, Form, Input, Select } from 'antd'
import './NewRecipe.css'
import FormItem from 'antd/es/form/FormItem'

const NewRecipe = ({ setNewData }) => {
	const onFinish = (values) => {
		console.log(values);
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
			<Button type="primary" htmlType="submit">Submit</Button>
		</Form>
	)
}
export default NewRecipe