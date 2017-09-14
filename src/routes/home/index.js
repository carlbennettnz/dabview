import { h, Component } from 'preact';
import style from './style';
import ProjectExplorer from '../../components/project-explorer';
import FrontPanel from '../../components/front-panel';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<ProjectExplorer />
        <FrontPanel />
			</div>
		)
	}
}
