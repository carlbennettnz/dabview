import Window from '../window'
import style from './style'
import Button from '../blocks/button'

export default class FrontPanel extends Window {
  constructor(props) {
    super(props);

    this.title = 'Control Panel.vi Front Panel on NIARC 2017.lvproj/RT myRIO Target'
    this.pos.x = 300

    const node = (name, children) => ({ name, children })
  }

  renderWindowContent() {
    return (
      <div class={style.panel}>
        <div class={style.toolbar}>
          <button title="Run">Run</button>
          <button title="Run Continuously">Run Continuously</button>
          <button title="Abort Execution">Abort Execution</button>
          <button title="Pause">Pause</button>
          <select>
            <option>15pt Application Font</option>
          </select>
          <button title="Align Objects">Align Objects</button>
          <button title="Distribute Objects">Distribute Objects</button>
          <button title="Resize Objects">Resize Objects</button>
          <button title="Reorder">Reorder</button>
          <input placeholder="Search" />
          <button title="Help">Help</button>
        </div>

        <div class={style.canvas}>
          <Button x={20} y={20} name={"Stop"} />
        </div>
      </div>
    )
  }
}