import './Search.css';
import { SmileOutlined } from '@ant-design/icons';
import { Result } from 'antd';


const Search = () => {
	return (
		<div className={'search-container'}>
			<Result
				icon={<SmileOutlined />}
				title="Чудово, новий рецепт додано!"
			/>
		</div>
	)
}
export default Search