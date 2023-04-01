import React from 'react'
import style from './Dialogs.module.css'
import Messag from './Messag/Messag'
import DialogItem from './DialogItem/DialogItem'

export const Dialogs = Props => {
	return (
		<div className={style.app_dialogs}>
			<div className={style.dialogs_items}>
				{Props.dialogs.map(item => (
					<DialogItem id={item.id} name={item.name} />
				))}
			</div>
			<div className={style.messages}>
				{Props.message.map(item => (
					<Messag messageSend={item.message} id={item.id} />
				))}
			</div>
		</div>
	)
}

export default Dialogs