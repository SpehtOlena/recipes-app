import { Button, Form, Input, Select, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import './NewRecipe.css';
import FormItem from 'antd/es/form/FormItem';
import ButtonRadius from '../../styledComponents/ButtonRadius';
import { useDispatch } from 'react-redux';
import { axiosRequest } from '../../redux/action';
import List from '../List/List';

const NewRecipe = ({ setActivePage }) => {
	const dispatch = useDispatch();
	const [form] = Form.useForm();
	const onFinish = (values) => {
		dispatch(axiosRequest(values, 'post'))
			.then(() => { setActivePage(<List />) })

	};
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
								<Space key={key} style={{ display: 'flex', marginBottom: 8, justifyContent: "space-between" }} align="baseline">
									<Form.Item
										{...restField}
										name={[name]}
										rules={[{ required: true, message: 'Вкажіть основні інгредієнти' }]}
									>
										<Input placeholder="Інгридієнт" style={{ width: "76vw" }} />
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
								<Space key={key} style={{ display: 'flex', marginBottom: 8, justifyContent: "space-between" }} align="baseline">
									<Form.Item
										{...restField}
										name={[name]}
										rules={[{ required: true, message: 'Вкажіть план приготування страви' }]}
									>
										<Input placeholder="Етап приготування" style={{ width: "76vw" }} />
									</Form.Item>
									<MinusCircleOutlined onClick={() => remove(name)} />
								</Space>
							))}

						</>
					)}
				</Form.List>
				<ButtonRadius $primary >Submit</ButtonRadius>
			</Form>
		</div>
	)
}
export default NewRecipe