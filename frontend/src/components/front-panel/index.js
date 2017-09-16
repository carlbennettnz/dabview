import { h } from 'preact'
import Window from '../window'
import style from './style'
import Button from '../blocks/button'

export default class FrontPanel extends Window {
  constructor({ x=350, y=10 }) {
    super({ x, y });
    console.log(x, y)

    this.title = 'Control Panel.vi Front Panel on NIARC 2017.lvproj/RT myRIO Target'

    const node = (name, children) => ({ name, children })
  }

  renderWindowContent() {
    return (
      <div class={style.panel}>
        <div class={style.toolbar}>
          <button title='Run'><img src='/assets/icons/run.png' alt='Run' /></button>
          <img src='/assets/icons/other-icons.png' />
          {/*<button title="Run Continuously">Run Continuously</button>
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
          <button title="Help">Help</button>*/}
        </div>

        <div class={style.canvas}>
          <Button x={20} y={20} name={"Stop"} />
        </div>
      </div>
    )
  }
}