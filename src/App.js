import { useState } from 'react'
//import {handleMinus, handleNum, handlePlus, handleReset, handleResult} from './handlers'
import { getButtons } from './getButtons'
import styles from './App.module.css'

export const App = () => {
	const [operand1, setOperand1] = useState('0')
	const [operand2, setOperand2] = useState('')
	const [operator, setOperator] = useState('')
	const [isResult, setIsResult] = useState(false)

	//присваиваем переменной state все значения для изменения состояния всего приложения
	const state = {
		operand1,
		setOperand1,
		operand2,
		setOperand2,
		operator,
		setOperator,
		isResult,
		setIsResult,
	}

	//присваиваем перемнной allButtons вызов функции, которая изменяет состояние в зависимости от действия кнопок
	const allButtons = getButtons(state)

	const output = operand1 + operator + operand2

	//все обработчики кнопок перенесены в отдельные файлы в общую папку handlers
	// const handleNum = (label) => {
	// 	if (operator === '') {
	// 		if (operand1 === '0') {
	// 			setOperand1(label)
	// 		} else {
	// 			setOperand1(operand1 + label)
	// 		}
	// 	} else {
	// 		if (operand2 === '0') {
	// 			setOperand2(label)
	// 		} else {
	// 			setOperand2(operand2 + label)
	// 		}
	// 	}
	// 	setIsResult(false)
	// }

	// const handleReset = () => {
	// 	setOperand1('0')
	// 	setOperand1('')
	// 	setOperator('')
	// 	setIsResult(false)
	// }

	// 	const handlePlus = () => {
	// 		setOperator('+')
	// 		setIsResult(false)
	// 	}
	//
	// 	const handleMinus = () => {
	// 		setOperator('-')
	// 		setIsResult(false)
	// 	}

	// 	const handleResult = () => {
	// 		if (operand2 !== '') {
	// 			switch (operator) {
	// 				case '+':
	// 					setOperand1(Number(operand1) + Number(operand2))
	// 					break
	//
	// 				case '-':
	// 					setOperand1(Number(operand1) - Number(operand2))
	// 					break
	//
	// 				default:
	// 				//ничего не длеаем
	// 			}
	// 			setOperand2('')
	// 		}
	// 		setOperator('')
	// 		setIsResult(true)
	// 	}

	//создаем массив из объектов(один объект->это отельная кнопка калькулятора) и присваиваем его значение перемнной buttons:
	// const buttons = [
	// { id: '1', label: '1', group: 'left', handler: (label) => handleNum(state, label) },
	// { id: '2', label: '2', group: 'left', handler: (label) => handleNum(state, label) },
	// { id: '3', label: '3', group: 'left', handler: (label) => handleNum(state, label) },
	// { id: '4', label: '4', group: 'left', handler: (label) => handleNum(state, label) },
	// { id: '5', label: '5', group: 'left', handler: (label) => handleNum(state, label) },
	// { id: '6', label: '6', group: 'left', handler: (label) => handleNum(state, label) },
	// { id: '7', label: '7', group: 'left', handler: (label) => handleNum(state, label) },
	// { id: '8', label: '8', group: 'left', handler: (label) => handleNum(state, label) },
	// { id: '9', label: '9', group: 'left', handler: (label) => handleNum(state, label) },
	// { id: '0', label: '0', group: 'left', handler: (label) => handleNum(state, label) },
	// { id: 'C', label: 'C', group: 'right', handler: () => handleReset(state) },
	// { id: '+', label: '+', group: 'right', handler: () => handlePlus(state) },
	// { id: '-', label: '-', group: 'right', handler: () => handleMinus(state) },
	// { id: '=', label: '=', group: 'right', handler: () => handleResult(state) },
	// ]
	//весь  этот массив был перенесён в отдельный файл внутрь экспортитруемой функции getButtons для получения всех кнопок, которые зависят от состояния приложения

	return (
		<div className={styles.app}>
			<h1>Calculator</h1>
			<div className={styles.container}>
				<div className={`${styles.screen} ${isResult ? styles.result : ''}`}>
					{output}
				</div>
				<div className={styles.btns}>
					<div className={styles.leftBtns}>
						{allButtons.map(({ id, label, group, handler }) =>
							group === 'left' ? (
								<button
									key={id}
									className={styles.btn}
									onClick={() => {
										handler(label)
									}}
								>
									{label}
								</button>
							) : null,
						)}
					</div>
					<div className={styles.rightBtns}>
						{allButtons.map(({ id, label, group, handler }) =>
							group === 'right' ? (
								<button key={id} className={styles.btn} onClick={handler}>
									{label}
								</button>
							) : null,
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
